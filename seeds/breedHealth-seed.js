const { BreedHealth } = require('../models');

const breedHealthData = [
    {
        breed_id: 1,
        health_id: 2
    }
];

const seedBreedHealth = () => BreedHealth.bulkCreate(breedHealthData);

module.exports = seedBreedHealth;