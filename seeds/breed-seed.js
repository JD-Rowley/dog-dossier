const { Breed } = require('../models');

const breedData = [
  {
    breed_name: 'Airedale Terrier',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Affenpinscher',
    height_min: 9,
    height_max: 11,
    weight_min: 7,
    weight_max: 9
  },
  {
    breed_name: 'Alaskan Malamute',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Afghan Hound',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Australian Shepherd',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Akita',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Australian Terrier',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Australian Cattle Dog',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'American Foxhound',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'American Staffordshire Terrier',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Afador',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Affenhuahua',height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
];

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;