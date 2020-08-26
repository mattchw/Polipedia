CREATE TABLE youtube(
	id SERIAL PRIMARY KEY NOT NULL,
	id_youtube character varying(100) NOT NULL,
	name character varying(100) NOT NULL,
	stance integer NOT NULL,
	profile text,
	description text,
	subscribe text,
	last_update DATE NOT NULL DEFAULT CURRENT_DATE
);