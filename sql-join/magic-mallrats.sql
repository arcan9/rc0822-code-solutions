SELECT "customers"."firstName",
       "customers"."lastName"
  FROM "customers"
  JOIN "rentals" using ("customerId")
  JOIN "inventory" using ("inventoryId")
  JOIN "films" using ("filmId")
WHERE "films"."title" = 'Magic Mallrats';
