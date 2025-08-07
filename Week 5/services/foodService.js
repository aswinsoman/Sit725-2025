const express = require('express');

const foodItems = [
  { id: 1, name: 'Pizza', price: 12.99 },
  { id: 2, name: 'Burger', price: 8.99 },
  { id: 3, name: 'Pasta', price: 10.99 }
];

exports.getFoodItems = () => {
  return foodItems;
};
