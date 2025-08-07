const services = require('../services/index');
exports.getFoodItems = (req, res) => {
  // Logic to retrieve food items
  const foodItems = services.foodService.getFoodItems();
  res.json(foodItems);
};
