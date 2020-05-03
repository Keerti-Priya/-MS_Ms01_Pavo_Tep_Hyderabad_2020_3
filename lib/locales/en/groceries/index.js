var groceries = {};
module["exports"] = groceries;
groceries.household_products = require("./household_product");
groceries.personal_care_products = require("./personal_care_products");
groceries.beverages = require("./beverages");
groceries.staples = require("./staples");