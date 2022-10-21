SELECT "c"."firstName",
       "c"."lastName",
       "p"."amount"
  FROM "customers" as "c"
  JOIN "payments" as "p" using ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
