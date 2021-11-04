const { BreedTraits } = require('../models');

const breedTraitsData = [
    {
        breed_id: 1,
        traits_id: 2
    },
    {
        breed_id: 2,
        traits_id: 1
    },
    // {
    //     breed_id: 3,
    //     traits_id: 23
    // },
    // {
    //     breed_id: 4,
    //     traits_id: 13
    // },
    // {
    //     breed_id: 5,
    //     traits_id: 3
    // },
    // {
    //     breed_id: 6,
    //     traits_id: 4
    // },
    // {
    //     breed_id: 7,
    //     traits_id: 5
    // },
    // {
    //     breed_id: 8,
    //     traits_id: 7
    // },
    // {
    //     breed_id: 9,
    //     traits_id: 21
    // },
    // {
    //     breed_id: 10,
    //     traits_id: 10
    // },
    // {
    //     breed_id: 11,
    //     traits_id: 17
    // },
    // {
    //     breed_id: 12,
    //     traits_id: 19
    // },
    // {
    //     breed_id: 13,
    //     traits_id: 12
    // },
    // {
    //     breed_id: 14,
    //     traits_id: 5
    // },
    // {
    //     breed_id: 15,
    //     traits_id: 6
    // },
    // {
    //     breed_id: 16,
    //     traits_id: 24
    // },
    // {
    //     breed_id: 17,
    //     traits_id: 21
    // },
    // {
    //     breed_id: 18,
    //     traits_id: 1
    // },
    // {
    //     breed_id: 19,
    //     traits_id: 19
    // },
    // {
    //     breed_id: 20,
    //     traits_id: 4
    // },
    // {
    //     breed_id: 21,
    //     traits_id: 5
    // },
    // {
    //     breed_id: 22,
    //     traits_id: 11
    // },
    // {
    //     breed_id: 23,
    //     traits_id: 12
    // },
    // {
    //     breed_id: 24,
    //     traits_id: 14
    // },
    // {
    //     breed_id: 25,
    //     traits_id: 17
    // },
    // {
    //     breed_id: 26,
    //     traits_id: 18
    // },
    // {
    //     breed_id: 27,
    //     traits_id: 20
    // },
    // {
    //     breed_id: 28,
    //     traits_id: 23
    // },
    // {
    //     breed_id: 29,
    //     traits_id: 25
    // },
    // {
    //     breed_id: 30,
    //     traits_id: 27
    // },
    // {
    //     breed_id: 31,
    //     traits_id: 31
    // },
    // {
    //     breed_id: 32,
    //     traits_id: 1
    // },
    // {
    //     breed_id: 33,
    //     traits_id: 2
    // },
    // {
    //     breed_id: 34,
    //     traits_id: 4
    // },
    // {
    //     breed_id: 35,
    //     traits_id: 7
    // },
    // {
    //     breed_id: 36,
    //     traits_id: 9
    // },
    // {
    //     breed_id: 37,
    //     traits_id: 10
    // },
    // {
    //     breed_id: 38,
    //     traits_id: 8
    // },
    // {
    //     breed_id: 39,
    //     traits_id: 7
    // },
    // {
    //     breed_id: 40,
    //     traits_id: 6
    // },
    // {
    //     breed_id: 41,
    //     traits_id: 13
    // },
    // {
    //     breed_id: 42,
    //     traits_id: 14
    // },
    // {
    //     breed_id: 43,
    //     traits_id: 17
    // },
    // {
    //     breed_id: 44,
    //     traits_id: 21
    // },
    // {
    //     breed_id: 45,
    //     traits_id: 19
    // },
    // {
    //     breed_id: 46,
    //     traits_id: 18
    // },
    // {
    //     breed_id: 47,
    //     traits_id: 2
    // },
    // {
    //     breed_id: 48,
    //     traits_id: 4
    // },
    // {
    //     breed_id: 49,
    //     traits_id: 7
    // },
    // {
    //     breed_id: 50,
    //     traits_id: 8
    // },
    // {
    //     breed_id: 51,
    //     traits_id: 9
    // },
    // {
    //     breed_id: 52,
    //     traits_id: 3
    // },
    // {
    //     breed_id: 53,
    //     traits_id: 2
    // }
];

const seedBreedTraits = () => BreedTraits.bulkCreate(breedTraitsData);

module.exports = seedBreedTraits;