CREATE TABLE UTILISATEUR (
	id_utilisateur SERIAL PRIMARY KEY,
	nom VARCHAR (50) NOT NULL,
	prenom VARCHAR (50) NOT NULL,
	password VARCHAR (50) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
	birthday DATE
);

-- INSERT INTO UTILISATEUR (nom, prenom, password, email)
-- VALUES
-- 	('halbaut','arthur', 'jaimepaslespizzas', 'halbaut.arthur@hotmail.fr');