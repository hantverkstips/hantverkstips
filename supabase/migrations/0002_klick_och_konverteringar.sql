-- Klickspårning per modul och sidtyp, spårningslänk per butik, och konverteringar
-- från nätverkets API. Se docs/AFFILIATE.md avsnitt 2 och 6 samt docs/ARKITEKTUR.md.

-- Butiken äger sin länkmall. Platshållare: {epi}, {epi2}, {url}. {url} ska ligga sist.
-- Exempel (Adtraction): https://track.adtraction.com/t/t?a=A&as=AS&t=2&tk=1&epi={epi}&epi2={epi2}&url={url}
alter table butiker
  add column lankmall text;

comment on column butiker.lankmall is
  'Mall för spårningslänk. Platshållare {epi}, {epi2}, {url}. Saknas: /go/ faller tillbaka på erbjudanden.affiliate_url.';

-- Klick: var på sidan, vilken sidtyp, vilket löpnummer, och EPI för matchning mot konverteringar.
alter table klick
  add column modul          text
    constraint klick_modul_check check (modul in ('varaval', 'tabell', 'kort_kompakt', 'kort_full', 'kalkylator', 'behovslista', 'avslut')),
  add column sidtyp         text
    constraint klick_sidtyp_check check (sidtyp in ('guide', 'problemguide', 'projektguide', 'test', 'kategori', 'verktyg', 'jamforelse')),
  add column position       integer
    constraint klick_position_check check (position > 0),
  add column epi            text,
  add column kategori_slug  text;

comment on column klick.epi is 'Klickets id i bas 36. Skrivs av /go/ direkt efter insert. Skickas till nätverket som epi.';
comment on column klick.modul is 'Modul knappen satt i. Listan speglar KLICK_MODULER i src/lib/affiliate.ts.';
comment on column klick.sidtyp is 'Sidtyp knappen satt på. Listan speglar SIDTYPER i src/lib/affiliate.ts.';

create unique index klick_epi_idx on klick(epi) where epi is not null;
create index klick_sida_idx on klick(sida);
create index klick_kategori_idx on klick(kategori_slug);

-- Konverteringar. Fylls dagligen av ett skript från nätverkets transaktionsendpoint.
-- Matchning på epi. Saknas epi matchas på klick_tid mot klick inom fem minuter i samma
-- program, och raden märks osaker = true.
create table konverteringar (
  id            bigint generated always as identity primary key,
  epi           text,
  klick_id      bigint references klick(id) on delete set null,
  order_varde   numeric(12,2),
  provision     numeric(12,2),
  valuta        text not null default 'SEK',
  status        text not null default 'vantande'
    constraint konverteringar_status_check check (status in ('vantande', 'godkand', 'avvisad')),
  klick_tid     timestamptz,
  order_tid     timestamptz,
  -- Nätverkets paymentStatus: 1 ej fakturerad, 2 fakturerad annonsör, 3 klar för utbetalning, 4 utbetald.
  betalstatus   smallint
    constraint konverteringar_betalstatus_check check (betalstatus between 1 and 4),
  -- Nätverkets eget id på transaktionen. Skyddar mot dubbletter vid daglig import.
  natverks_id   text not null unique,
  osaker        boolean not null default false,
  importerad    timestamptz not null default now()
);

create index konverteringar_epi_idx on konverteringar(epi);
create index konverteringar_klick_idx on konverteringar(klick_id);
create index konverteringar_order_tid_idx on konverteringar(order_tid);

-- RLS. Inga policyer för anon eller authenticated: bara service role läser och skriver.
alter table konverteringar enable row level security;
