SELECT "storeId",
  count(*) as "totalDVDs"
  FROM "inventory"
  GROUP BY "storeId";
