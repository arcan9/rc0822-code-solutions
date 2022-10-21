SELECT "countries"."name" as "countries",
  count("cities".*) as "totalCities"
  FROM "cities"
  JOIN "countries" using ("countryId")
  GROUP BY "countries"."countryId";
