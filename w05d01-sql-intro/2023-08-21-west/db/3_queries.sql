-- Basic SELECT
SELECT * FROM pokemon;
SELECT name, pokedex_number, type FROM pokemon;

-- ORDER BY
SELECT name, pokedex_number, type
FROM pokemon
ORDER BY name DESC;

-- WHERE
SELECT name, pokedex_number, type
FROM pokemon
WHERE type = 'Water' OR pokedex_number >= 100;

-- LIKE vs ILIKE vs LOWER
SELECT name, pokedex_number, type
FROM pokemon
WHERE LOWER(name) LIKE '%s%';

-- Aggregate functions
SELECT AVG(cuteness_rating) AS average_cuteness_rating
FROM pokemon;

SELECT MAX(cuteness_rating), type,
FROM pokemon
GROUP BY type;

SELECT COUNT(*)
FROM pokemon;

-- GROUP BY
SELECT AVG(cuteness_rating), type
FROM pokemon
GROUP BY type
ORDER BY AVG(cuteness_rating) DESC;

-- HAVING (WHERE but for aggregations)
SELECT AVG(cuteness_rating), type
FROM pokemon
GROUP BY type
HAVING AVG(cuteness_rating) >= 3
ORDER BY AVG(cuteness_rating) DESC;

-- Output to csv file (run in terminal, not psql console)
-- psql -d pokemon_and_trainers -t -A -F"," -c "SELECT * FROM pokemon" > pokemon.csv

-- Change display mode
\x -- toggles between horizontal-vertical display
\x auto -- automatically chooses between horizontal vs. vertical display

-- JOIN
SELECT *
FROM pokemon
JOIN trainers ON trainer_id = trainers.id
WHERE trainers.name = 'Ash Ketchum';

-- Different types of JOIN

-- By default, JOIN is INNER JOIN which excludes pokemon without trainers and trainers without pokemon in the join table

-- Include pokemon that don't have trainers
SELECT pokemon.name
FROM pokemon LEFT JOIN trainers ON trainer_id = trainers.id;

-- Include trainers that don't have pokemon
SELECT trainers.name
FROM pokemon RIGHT JOIN trainers ON trainer_id = trainers.id;

-- Include both
SELECT trainers.name AS trainer_name, pokemon.name AS pokemon_name
FROM pokemon FULL OUTER JOIN trainers ON trainer_id = trainers.id;
