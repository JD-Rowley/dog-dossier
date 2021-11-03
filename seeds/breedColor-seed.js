const { BreedColor } = require('../models');

const breedColorData = [
    {
        breed_id: 1,
        color_id: 2
    }
];

const seedBreedColors = () => BreedColor.bulkCreate(breedColorData);

module.exports = seedBreedColors;