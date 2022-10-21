SELECT "countries"."name" as "country",
  count("cities".*) as "totalCities"
  FROM "cities"
  JOIN "countries" using ("countryId")
  GROUP BY "countries"."countryId";
