const { BreedTraits } = require('../models');

const breedTraitsData = [
    {
        breed_id: 1,
        trait_id: 2
    },
    {
        breed_id: 2,
        trait_id: 1
    },
    {
        breed_id: 3,
        trait_id: 23
    },
    {
        breed_id: 4,
        trait_id: 13
    },
    {
        breed_id: 5,
        trait_id: 3
    },
    {
        breed_id: 6,
        trait_id: 4
    },
    {
        breed_id: 7,
        trait_id: 5
    },
    {
        breed_id: 8,
        trait_id: 7
    },
    {
        breed_id: 9,
        trait_id: 21
    },
    {
        breed_id: 10,
        trait_id: 10
    },
    {
        breed_id: 11,
        trait_id: 17
    },
    {
        breed_id: 12,
        trait_id: 19
    },
    {
        breed_id: 13,
        trait_id: 12
    },
    {
        breed_id: 14,
        trait_id: 5
    },
    {
        breed_id: 15,
        trait_id: 6
    },
    {
        breed_id: 16,
        trait_id: 24
    },
    {
        breed_id: 17,
        trait_id: 21
    },
    {
        breed_id: 18,
        trait_id: 1
    },
    {
        breed_id: 19,
        trait_id: 19
    },
    {
        breed_id: 20,
        trait_id: 4
    },
    {
        breed_id: 21,
        trait_id: 5
    },
    {
        breed_id: 22,
        trait_id: 11
    },
    {
        breed_id: 23,
        trait_id: 12
    },
    {
        breed_id: 24,
        trait_id: 14
    },
    {
        breed_id: 25,
        trait_id: 17
    },
    {
        breed_id: 26,
        trait_id: 18
    },
    {
        breed_id: 27,
        trait_id: 20
    },
    {
        breed_id: 28,
        trait_id: 23
    },
    {
        breed_id: 29,
        trait_id: 25
    },
    {
        breed_id: 30,
        trait_id: 27
    },
    {
        breed_id: 31,
        trait_id: 31
    },
    {
        breed_id: 32,
        trait_id: 1
    },
    {
        breed_id: 33,
        trait_id: 2
    },
    {
        breed_id: 34,
        trait_id: 4
    },
    {
        breed_id: 35,
        trait_id: 7
    },
    {
        breed_id: 36,
        trait_id: 9
    },
    {
        breed_id: 37,
        trait_id: 10
    },
    {
        breed_id: 38,
        trait_id: 8
    },
    {
        breed_id: 39,
        trait_id: 7
    },
    {
        breed_id: 40,
        trait_id: 6
    },
    {
        breed_id: 41,
        trait_id: 13
    },
    {
        breed_id: 42,
        trait_id: 14
    },
    {
        breed_id: 43,
        trait_id: 17
    },
    {
        breed_id: 44,
        trait_id: 21
    },
    {
        breed_id: 45,
        trait_id: 19
    },
    {
        breed_id: 46,
        trait_id: 18
    },
    {
        breed_id: 47,
        trait_id: 2
    },
    {
        breed_id: 48,
        trait_id: 4
    },
    {
        breed_id: 49,
        trait_id: 7
    },
    {
        breed_id: 50,
        trait_id: 8
    },
    {
        breed_id: 51,
        trait_id: 9
    },
    {
        breed_id: 52,
        trait_id: 2
    },
    {
        breed_id: 52,
        trait_id: 4
    },
    {
        breed_id: 52,
        trait_id: 9
    }
];

const seedBreedTraits = () => BreedTraits.bulkCreate(breedTraitsData);

module.exports = seedBreedTraits;