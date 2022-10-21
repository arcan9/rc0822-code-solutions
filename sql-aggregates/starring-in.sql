SELECT "genres"."name" as "genre",
      count("films".*) as "totalFilms"
  FROM "genres"
  JOIN "filmGenre" using ("genreId")
  JOIN "films" using ("filmId")
  JOIN "castMembers" using ("filmId")
  JOIN "actors" using ("actorId")
  WHERE "actors"."firstName" = 'Lisa' AND
        "actors"."lastName" = 'Monroe'
  GROUP BY
           "genres"."name";
