DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    id serial PRIMARY KEY NOT NULL,
    name text,
    age INTEGER,
    kind text
);

INSERT INTO pets (name, age, kind) VALUES ('Auroora', 21, 'Cheetah');
INSERT INTO pets (name, age, kind) VALUES ('Trstram', 49, 'Vulture');
INSERT INTO pets (name, age, kind) VALUES ('Eric', 45, 'Penguin');
INSERT INTO pets (name, age, kind) VALUES ('Trix', 40, 'Otter');
INSERT INTO pets (name, age, kind) VALUES ('Patsy', 28, 'Sunbird');
INSERT INTO pets (name, age, kind) VALUES ('North', 40, 'Turtle');
INSERT INTO pets (name, age, kind) VALUES ('Kaleb', 35, 'Spider');
INSERT INTO pets (name, age, kind) VALUES ('Yevette', 47, 'Jackal');
INSERT INTO pets (name, age, kind) VALUES ('Kaja', 27, 'Starling');
INSERT INTO pets (name, age, kind) VALUES ('Erena', 42, 'Raccoon');
INSERT INTO pets (name, age, kind) VALUES ('Gloria', 40, 'Crow');
INSERT INTO pets (name, age, kind) VALUES ('Ilyssa', 30, 'Fox');
INSERT INTO pets (name, age, kind) VALUES ('Claudette', 33, 'Hyena');
INSERT INTO pets (name, age, kind) VALUES ('Judie', 43, 'Anteater');
INSERT INTO pets (name, age, kind) VALUES ('Morton', 38, 'Hawk');
INSERT INTO pets (name, age, kind) VALUES ('Julienne', 7, 'Armadillo');
INSERT INTO pets (name, age, kind) VALUES ('Gerti', 39, 'Mongoose');
INSERT INTO pets (name, age, kind) VALUES ('Barbette', 26, 'Hedgehog');
INSERT INTO pets (name, age, kind) VALUES ('Floris', 46, 'Squirrel');
INSERT INTO pets (name, age, kind) VALUES ('Cosimo', 4, 'Albatross');

--Create Read Update Destroy

--SELECT * FROM pets
-- /get/1
-- SELECT * FROM PETS WHERE id = 1

--ALTER TABLE     WHERE input... = 
--

-- CAN USE UPDATE FOR PATCH OR MAYBE ALTER TOO
-- UPDATE pets SET name = "whatever input" WHERE id = :index

-- CAN USE DELETE FOR DELETE REQUEST
-- DELETE FROM pets WHERE id = :index

-- CAN USE INSERT FOR POST REQUESTS
-- INSERT INTO pets (name, age, kind) VALUES ("input", "input", "input")