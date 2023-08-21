DELETE FROM pokemon;
DELETE FROM trainers;

INSERT INTO trainers
  (name, hometown, biography)
VALUES
  ('Ash Ketchum', 'Pallet Town', 'He is a Pokémon Trainer from Pallet Town whose goal is to become a Pokémon Master'),
  ('Misty', 'Cerulean City', 'Misty (Japanese: カスミ Kasumi) is the Gym Leader of Cerulean City''s Gym, known officially as the Cerulean Gym. She gives the Cascade Badge to Trainers who defeat her in battle. She specializes in Water-type Pokémon.'),
  ('Brock', 'Pewter City', 'Brock (Japanese: タケシ Takeshi) is the Gym Leader of Pewter City''s Gym, known officially as the Pewter Gym. He gives the Boulder Badge to Trainers who defeat him in battle. He specializes in Rock-type Pokémon.'),
  ('Ash''s Dad', 'Pallet Town', ' Never formally introduced, the identity of his father has always been under heavy speculation.');

INSERT INTO pokemon
  (trainer_id, name, pokedex_description, pokedex_number, type, cuteness_rating, strength_rating)
VALUES
  (1, 'Bulbasaur', 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.', 1, 'Grass', 3, 2);

INSERT INTO pokemon
  (trainer_id, name, pokedex_number, type, cuteness_rating, strength_rating, pokedex_description)
VALUES
  (1, 'Charizard', 6, 'Fire', 1, 5, 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.'),
  (1, 'Squirtle', 7, 'Water', 5, 2, 'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.'),
  (1, 'Pikachu', 25, 'Electric', 5, 5, 'It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.'),
  (3, 'Vulpix', 37, 'Fire', 4, 3, 'At the time of birth, it has just one tail. The tail splits from its tip as it grows older.'),
  (2, 'Psyduck', 54, 'Water', 5, 5, 'It has mystical powers but doesn''t recall that it has used them. That is why it always looks puzzled.'),
  (3, 'Geodude', 74, 'Rock', 1, 3, 'Commonly found near mountain trails, etc. If you step on one by accident, it gets angry.'),
  (3, 'Onix', 95, 'Rock', 1, 4, 'As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.'),
  (1, 'Kingler', 99, 'Water', 1, 4, 'The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.'),
  (2, 'Starmie', 121, 'Water', 1, 4, 'Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.'),
  (1, 'Lapras', 131, 'Water', 4, 5, 'A gentle soul that can read the minds of people. It can ferry people across the sea on its back.'),
  (null, 'Mewtwo', 150, 'Psychic', 1, 5, 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.');


