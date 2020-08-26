CREATE TABLE person(
	id SERIAL PRIMARY KEY NOT NULL,
	name character varying(100) NOT NULL,
	stance integer NOT NULL,
	occupation integer[] NOT NULL,
	description text,
	profile text
);