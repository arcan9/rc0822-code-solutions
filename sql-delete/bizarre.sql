DELETE
  FROM "cities"
WHERE "name" = 'Pyongyang'
RETURNING *;
