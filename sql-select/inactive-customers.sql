SELECT "customerId",
       "storeId",
       "firstName",
       "lastName",
       "email",
       "addressId",
       "isActive",
       "createdAt",
       "updatedAt"
  from "customers"
  where "isActive" = 'false';
