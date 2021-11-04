const { BreedHealth } = require('../models');

const breedHealthData = [
    {
        breed_id: 1,
        health_id: 2
    },
    {
        breed_id: 2,
        health_id: 1
    },
    {
        breed_id: 3,
        health_id: 10
    },
    {
        breed_id: 4,
        health_id: 6
    },
    {
        breed_id: 5,
        health_id: 5
    },
    {
        breed_id: 6,
        health_id: 8
    },
    {
        breed_id: 7,
        health_id: 3
    },
    {
        breed_id: 8,
        health_id: 10
    },
    {
        breed_id: 9,
        health_id: 6
    },
    {
        breed_id: 10,
        health_id: 11
    },
    {
        breed_id: 11,
        health_id: 2
    },
    {
        breed_id: 12,
        health_id: 2
    },
    {
        breed_id: 13,
        health_id: 4
    },
    {
        breed_id: 14,
        health_id: 7
    },
    {
        breed_id: 15,
        health_id: 1
    },
    {
        breed_id: 16,
        health_id: 2
    },
    {
        breed_id: 17,
        health_id: 6
    },
    {
        breed_id: 18,
        health_id: 9
    },
    {
        breed_id: 19,
        health_id: 5
    },
    {
        breed_id: 20,
        health_id: 7
    },
    {
        breed_id: 21,
        health_id: 3
    },
    {
        breed_id: 22,
        health_id: 7
    },
    {
        breed_id: 23,
        health_id: 4
    },
    {
        breed_id: 24,
        health_id: 8
    },
    {
        breed_id: 25,
        health_id: 10
    },
    {
        breed_id: 26,
        health_id: 11
    },
    {
        breed_id: 27,
        health_id: 3
    },
    {
        breed_id: 28,
        health_id: 2
    },
    {
        breed_id: 29,
        health_id: 1
    },
    {
        breed_id: 30,
        health_id: 4
    },
    {
        breed_id: 31,
        health_id: 6
    },
    {
        breed_id: 32,
        health_id: 5
    },
    {
        breed_id: 33,
        health_id: 8
    },
    {
        breed_id: 34,
        health_id: 7
    },
    {
        breed_id: 35,
        health_id: 9
    },
    {
        breed_id: 36,
        health_id: 3
    },
    {
        breed_id: 37,
        health_id: 2
    },
    {
        breed_id: 38,
        health_id: 1
    },
    {
        breed_id: 39,
        health_id: 4
    },
    {
        breed_id: 40,
        health_id: 7
    },
    {
        breed_id: 41,
        health_id: 5
    },
    {
        breed_id: 42,
        health_id: 3
    },
    {
        breed_id: 43,
        health_id: 10
    },
    {
        breed_id: 44,
        health_id: 11
    },
    {
        breed_id: 45,
        health_id: 8
    },
    {
        breed_id: 46,
        health_id: 4
    },
    {
        breed_id: 47,
        health_id: 2
    },
    {
        breed_id: 48,
        health_id: 9
    },
    {
        breed_id: 49,
        health_id: 5
    },
    {
        breed_id: 50,
        health_id: 7
    },
    {
        breed_id: 51,
        health_id: 10
    },
    {
        breed_id: 52,
        health_id: 1
    },
    {
        breed_id: 52,
        health_id: 2
    }
];

const seedBreedHealth = () => BreedHealth.bulkCreate(breedHealthData);

module.exports = seedBreedHealth;