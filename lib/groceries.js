/**
 *
 * @namespace faker.groceries
 */
var Groceries = function (faker) {
  var self = this;
  var fake = faker.fake;


  /**
  * groceries
  *
  * @method faker.groceries.groceries
  */
  self.groceries = function () {
    return fake('{{groceries.household_products}} {{groceries.staples}}');
  };

  self.groceries.schema = {
    "description": "Generates a random groceries.",
    "sampleResults": ["handwash dal", "sanitizer turmeric", "detergent salt"]
  };


  /**
 * household_products
 *
 * @method faker.groceries.household_products
 */
  self.household_products = function () {
    return faker.random.arrayElement(faker.definitions.groceries.household_products);
  };

  self.household_products.schema = {
    "description": "Generates a household_product name.",
    "sampleResults": ["detergents", "bathsoaps", "airfragrance"]
  };

  /**
* staples
*
* @method faker.groceries.staples
*/

  self.staples = function () {
    return faker.random.arrayElement(faker.definitions.groceries.staples);
  };

  self.staples.schema = {
    "description": "Generates a  groceries staples.",
    "sampleResults": ["dal", "turmeric", "salt"]
  };

  /**
* beverages
*
* @method faker.groceries.type
*/
  self.beverages = function () {
    return faker.random.arrayElement(faker.definitions.groceries.beverages);
  };

  self.beverages.schema = {
    "description": "Generates a groceries beverages.",
    "sampleResults": ["chips", "chocolates", "bread", "jam"]
  };

  /**
     * personal_care_products
     *
     * @method faker.groceries.personal_care_products
     */
  self.personal_care_products = function () {
    return faker.random.arrayElement(faker.definitions.groceries.personal_care_products);
  };

  self.personal_care_products.schema = {
    "description": "Generates a groceries personal_care_products.",
    "sampleResults": ["bodywash", "facewash", "shampoo"]
  };
};

module["exports"] = Groceries;


