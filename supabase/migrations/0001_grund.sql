-- Grundschema för hantverkstips.se. Se docs/ARKITEKTUR.md.
-- Utökas när Adtractions feedformat är känt.

create table butiker (
  id                 bigint generated always as identity primary key,
  slug               text not null unique,
  namn               text not null,
  affiliate_natverk  text not null default 'adtraction',
  cookie_dagar       integer,
  provision_procent  numeric(5,2),
  skapad             timestamptz not null default now()
);

create table kategorier (
  id            bigint generated always as identity primary key,
  slug          text not null unique,
  namn          text not null,
  beskrivning   text,
  foralder_id   bigint references kategorier(id)
);

create table produkter (
  id            bigint generated always as identity primary key,
  slug          text not null unique,
  namn          text not null,
  marke         text,
  modell        text,
  kategori_id   bigint references kategorier(id),
  bild_url      text,
  specs         jsonb not null default '{}'::jsonb,
  ean           text,
  aktiv         boolean not null default true,
  skapad        timestamptz not null default now(),
  uppdaterad    timestamptz not null default now()
);
create index produkter_kategori_idx on produkter(kategori_id);
create index produkter_specs_idx on produkter using gin(specs);

create table erbjudanden (
  id             bigint generated always as identity primary key,
  produkt_id     bigint not null references produkter(id) on delete cascade,
  butik_id       bigint not null references butiker(id),
  pris           numeric(10,2),
  ord_pris       numeric(10,2),
  lagerstatus    text,
  butik_url      text,
  affiliate_url  text not null,
  uppdaterad     timestamptz not null default now(),
  unique (produkt_id, butik_id)
);

create table prishistorik (
  id             bigint generated always as identity primary key,
  erbjudande_id  bigint not null references erbjudanden(id) on delete cascade,
  pris           numeric(10,2) not null,
  datum          date not null default current_date,
  unique (erbjudande_id, datum)
);

-- Klick på affiliatelänkar. Inga personuppgifter.
create table klick (
  id          bigint generated always as identity primary key,
  produkt_id  bigint references produkter(id) on delete set null,
  butik_id    bigint references butiker(id) on delete set null,
  sida        text,
  tidpunkt    timestamptz not null default now()
);
create index klick_tidpunkt_idx on klick(tidpunkt);
create index klick_produkt_idx on klick(produkt_id);

-- RLS. Produktdata läsbar publikt (anon), klick skrivs bara av service role.
alter table butiker enable row level security;
alter table kategorier enable row level security;
alter table produkter enable row level security;
alter table erbjudanden enable row level security;
alter table prishistorik enable row level security;
alter table klick enable row level security;

create policy "publik läsning" on butiker for select using (true);
create policy "publik läsning" on kategorier for select using (true);
create policy "publik läsning" on produkter for select using (aktiv);
create policy "publik läsning" on erbjudanden for select using (true);
create policy "publik läsning" on prishistorik for select using (true);
-- klick: inga policyer för anon/authenticated. Service role går förbi RLS.
