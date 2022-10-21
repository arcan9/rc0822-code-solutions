SELECT "customers"."firstName",
       "customers"."lastName",
  sum("payments"."amount") as "totalPayments"
FROM "payments"
JOIN "customers" using ("customerId")
GROUP BY "payments"."amount",
         "customers"."firstName",
         "customers"."lastName"
ORDER BY "totalPayments" DESC;
