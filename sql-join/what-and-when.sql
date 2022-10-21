SELECT "films"."releaseYear",
       "genres"."name"
  FROM "films"
  JOIN "filmGenre" using ("filmId")
  JOIN "genres" using ("genreId")
WHERE "films"."title" = 'Boogie Amelie';
