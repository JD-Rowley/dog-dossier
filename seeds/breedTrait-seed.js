const { BreedTraits } = require('../models');

const breedTraitsData = [
    {
        breed_id: 1,
        traits_id: 2
    }
];

const seedBreedTraits = () => BreedTraits.bulkCreate(breedTraitsData);

module.exports = seedBreedTraits;