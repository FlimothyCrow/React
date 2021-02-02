SELECT name FROM bands;
/*
CREATE TABLE Mehms (
    id INT NOT NULL AUTO_INCREMENT,
    path VARCHAR(800),
    name VARCHAR(800),
    sizeKb int,
    PRIMARY KEY (id)
);
*/

SELECT * FROM bands
WHERE dateFormed > 1989 AND name LIKE '%band%';

SELECT * FROM albums
INNER JOIN bands ON bands.id = albums.band_id
WHERE bands.name = 'Pink Freud' AND albums.dateRecorded > 1970;

SELECT count(*), bands.name FROM albums
INNER JOIN bands ON bands.id = albums.band_id
GROUP BY bands.name;

INSERT INTO Albums (band_id, album_name, dateRecorded) VALUES (1, 'Wish You Were Here', 1973), (2, 'Orchestra in G Im dumb', 1995);
UPDATE bands
SET name = 'Handel', dateFormed = 1995
WHERE id = 2;

SELECT name FROM bands
INNER JOIN albums ON bands.id = albums.band_id
WHERE album_name LIKE '%i%'
GROUP BY name;

SELECT * FROM mehms;

