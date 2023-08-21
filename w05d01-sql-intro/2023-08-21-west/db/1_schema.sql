-- A comment in psql
DROP TABLE IF EXISTS pokemon;

DROP TABLE IF EXISTS trainers;

CREATE TABLE trainers (
  id        SERIAL        PRIMARY KEY,
  name      VARCHAR(255)  NOT NULL,
  biography TEXT,
  hometown  VARCHAR(255)  NOT NULL
);

CREATE TABLE pokemon (
  id                  SERIAL        PRIMARY KEY NOT NULL,
  trainer_id          INTEGER       REFERENCES trainers(id), -- Think hard about whether this should be NOT NULL
  name                VARCHAR(255)  NOT NULL,
  pokedex_number      INTEGER       NOT NULL,
  pokedex_description TEXT,
  type                VARCHAR(255)  NOT NULL,
  cuteness_rating     INTEGER       NOT NULL DEFAULT 3,
  strength_rating     INTEGER       NOT NULL DEFAULT 3
);

