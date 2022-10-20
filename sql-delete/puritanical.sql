DELETE
  FROM "films"
WHERE "rating" = 'G'
RETURNING *;
