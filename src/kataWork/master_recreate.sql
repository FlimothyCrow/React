DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS `artists`;
DROP TABLE IF EXISTS `labels`;
DROP TABLE IF EXISTS `artists_x_songs`;

CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `album_name` varchar(255) DEFAULT NULL,
  `dateRecorded` year DEFAULT NULL,
  `label_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `song_name` varchar(255) DEFAULT NULL,
  `song_length` int NOT NULL,
  `album_id` int DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `album_id` (`album_id`),
  CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`)
);

CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(255) DEFAULT NULL,
  `date_started` int NOT NULL,
  `label_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `label_id` (`label_id`),
  CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`label_id`) REFERENCES `labels` (`id`)
);

CREATE TABLE `labels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `label_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `artists_x_songs` (
  `song_id` int NOT NULL,
  `artist_id` int NOT NULL,
  KEY `song_id` (`song_id`),
  KEY `artist_id` (`artist_id`),
  CONSTRAINT `artists_x_songs_ibfk_1` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`),
  CONSTRAINT `artists_x_songs_ibfk_2` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
);

INSERT INTO `albums` VALUES (1,'Alberts greatest hits',1981,'4'),(2,'Alberts worst hits',1980,'4'),(3,'stevie plays hollywood',1990,'3');
INSERT INTO `songs` VALUES (29,'pride and joy.mp3',203,3),(30,'scuttle buttin\'.mp3',397,3),(31,'taxman.mp3',329,1),(32,'voodoo chile.mp3',212,3),(33,'cadillac assembly.wma',235,2),(34,'gonna make it somehow.mp3',308,1),(35,'goodtime charlie.mp3',342,1),(36,'i got the blues.mp3',390,1),(37,'pride and joy duet.mp3',344,1);
INSERT INTO `artists` VALUES (1,'Albert King',1982,4),(2,'Stevie Ray Vaughan',1962,3),(3,'Dave Matthews',1993,5);
INSERT INTO `labels` VALUES (3,'spicy records'),(4,'cool tunes'),(5,'dazzle entertainment');
INSERT INTO `artists_x_songs` VALUES (37,1),(37,2),(30,2),(35,1),(33,1),(30,2);

