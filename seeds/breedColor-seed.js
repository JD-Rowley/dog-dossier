const { BreedColor } = require('../models');

const breedColorData = [
    {
        breed_id: 1,
        color_id: 2
    },
    {
        breed_id: 1,
        color_id: 1
    },
    {
        breed_id: 2,
        color_id: 1
    },
    {
        breed_id: 2,
        color_id: 2
    },
    {
        breed_id: 3,
        color_id: 32
    },
    {
        breed_id: 4,
        color_id: 4
    },
    {
        breed_id: 5,
        color_id: 6
    },
    {
        breed_id: 5,
        color_id: 27
    },
    {
        breed_id: 6,
        color_id: 28
    },
    {
        breed_id: 7,
        color_id: 2
    },
    {
        breed_id: 8,
        color_id: 1
    },
    {
        breed_id: 9,
        color_id: 5
    },
    {
        breed_id: 9,
        color_id: 6
    },
    {
        breed_id: 10,
        color_id: 7
    },
    {
        breed_id: 10,
        color_id: 11
    },
    {
        breed_id: 11,
        color_id: 1
    },
    {
        breed_id: 11,
        color_id: 11
    },
    {
        breed_id: 11,
        color_id: 15
    },
    {
        breed_id: 12,
        color_id: 1
    },
    {
        breed_id: 13,
        color_id: 2
    },
    {
        breed_id: 14,
        color_id: 1
    },
    {
        breed_id: 15,
        color_id: 1
    },
    {
        breed_id: 15,
        color_id: 2
    },
    {
        breed_id: 16,
        color_id: 22
    },
    {
        breed_id: 17,
        color_id: 32
    },
    {
        breed_id: 18,
        color_id: 23
    },
    {
        breed_id: 19,
        color_id: 1
    },
    {
        breed_id: 20,
        color_id: 1
    },
    {
        breed_id: 21,
        color_id: 1
    },
    {
        breed_id: 21,
        color_id: 23
    },
    {
        breed_id: 21,
        color_id: 2
    },
    {
        breed_id: 22,
        color_id: 2
    },
    {
        breed_id: 22,
        color_id: 20
    },
    {
        breed_id: 23,
        color_id: 1
    },
    {
        breed_id: 24,
        color_id: 1
    },
    {
        breed_id: 25,
        color_id: 2
    },
    {
        breed_id: 26,
        color_id: 3
    },
    {
        breed_id: 26,
        color_id: 10
    },
    {
        breed_id: 26,
        color_id: 27
    },
    {
        breed_id: 27,
        color_id: 4
    },
    {
        breed_id: 28,
        color_id: 3
    },
    {
        breed_id: 29,
        color_id: 31
    },
    {
        breed_id: 30,
        color_id: 4
    },
    {
        breed_id: 31,
        color_id: 2
    },
    {
        breed_id: 32,
        color_id: 3
    },
    {
        breed_id: 33,
        color_id: 1
    },
    {
        breed_id: 33,
        color_id: 4
    },
    {
        breed_id: 34,
        color_id: 2
    },
    {
        breed_id: 35,
        color_id: 31
    },
    {
        breed_id: 36,
        color_id: 1
    },
    {
        breed_id: 36,
        color_id: 7
    },
    {
        breed_id: 36,
        color_id: 17
    },
    {
        breed_id: 37,
        color_id: 31
    },
    {
        breed_id: 38,
        color_id: 27
    },
    {
        breed_id: 39,
        color_id: 27
    },
    {
        breed_id: 40,
        color_id: 27
    },
    {
        breed_id: 41,
        color_id: 2
    },
    {
        breed_id: 42,
        color_id: 3
    },
    {
        breed_id: 43,
        color_id: 27
    },
    {
        breed_id: 44,
        color_id: 6
    },
    {
        breed_id: 45,
        color_id: 6
    },
    {
        breed_id: 45,
        color_id: 9
    },
    {
        breed_id: 46,
        color_id: 4
    },
    {
        breed_id: 46,
        color_id: 26
    },
    {
        breed_id: 47,
        color_id: 2
    },
    {
        breed_id: 48,
        color_id: 27
    },
    {
        breed_id: 48,
        color_id: 32
    },
    {
        breed_id: 49,
        color_id: 3
    },
    {
        breed_id: 49,
        color_id: 28
    },
    {
        breed_id: 49,
        color_id: 1
    },
    {
        breed_id: 50,
        color_id: 26
    },
    {
        breed_id: 50,
        color_id: 4
    },
    {
        breed_id: 51,
        color_id: 31
    },
    {
        breed_id: 52,
        color_id: 31
    },
    {
        breed_id: 53,
        color_id: 1
    },
    {
        breed_id: 53,
        color_id: 3
    },
    {
        breed_id: 53,
        color_id: 7
    }
];

const seedBreedColors = () => BreedColor.bulkCreate(breedColorData);

module.exports = seedBreedColors;