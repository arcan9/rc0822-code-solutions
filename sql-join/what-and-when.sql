SELECT "films"."releaseYear",
       "genres"."name" as "filmGenre"
  FROM "films"
  JOIN "filmGenre" using ("filmId")
  JOIN "genres" using ("genreId")
WHERE "films"."title" = 'Boogie Amelie';
