SELECT "cities"."name" as "city",
       "countries"."name" as "country",
       "a"."line1",
       "a"."district"
  FROM "addresses" as "a"
  JOIN "cities" using ("cityId")
  JOIN "countries" using ("countryId");
