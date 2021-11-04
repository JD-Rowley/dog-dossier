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
    breed_name: 'Affenhuahua',
    height_min: 21,
    height_max: 23,
    weight_min: 40,
    weight_max: 65
  },
  {
    breed_name: 'Abruzzenhund',
    height_min: 26,
    height_max: 29,
    weight_min: 77,
    weight_max: 79
  },
  {
    breed_name: 'Affen Spaniel',
    height_min: 10,
    height_max: 20,
    weight_min: 15,
    weight_max: 20
  },
  {
    breed_name: 'Afaird',
    height_min: 23,
    height_max: 27,
    weight_min: 55,
    weight_max: 88
  },
  {
    breed_name: 'Affen Border Terrier',
    height_min: 10,
    height_max: 14,
    weight_min: 6,
    weight_max: 16
  },
  {
    breed_name: 'Affen Tzu',
    height_min: 9,
    height_max: 11,
    weight_min: 8,
    weight_max: 13
  },
  {
    breed_name: 'Affenchon',
    height_min: 9,
    height_max: 11,
    weight_min: 7,
    weight_max: 12
  },
  {
    breed_name: 'Affengriffon',
    height_min: 7,
    height_max: 11,
    weight_min: 7,
    weight_max: 12
  },
  {
    breed_name: 'Affenpug',
    height_min: 9,
    height_max: 12,
    weight_min: 7,
    weight_max: 18
  },
  {
    breed_name: 'Affenshire',
    height_min: 8,
    height_max: 11,
    weight_min: 4,
    weight_max: 9
  },
  {
    breed_name: 'Afghan Chon',
    height_min: 10,
    height_max: 27,
    weight_min: 11,
    weight_max: 75
  },
  {
    breed_name: 'Africanis',
    height_min: 20,
    height_max: 24,
    weight_min: 55,
    weight_max: 100
  },
  {
    breed_name: 'Aidi',
    height_min: 20,
    height_max: 24,
    weight_min: 55,
    weight_max: 90
  },
  {
    breed_name: 'Ainu (Hokkaido)',
    height_min: 18,
    height_max: 20,
    weight_min: 44,
    weight_max: 66
  },
  {
    breed_name: 'Akbash',
    height_min: 28,
    height_max: 34,
    weight_min: 80,
    weight_max: 140
  },
  {
    breed_name: 'Alopekis',
    height_min: 8,
    height_max: 12,
    weight_min: 6,
    weight_max: 16
  },
  {
    breed_name: 'Alpine Dachsbracke',
    height_min: 13,
    height_max: 16,
    weight_min: 33,
    weight_max: 40
  },
  {
    breed_name: 'American Alsatian',
    height_min: 25,
    height_max: 32,
    weight_min: 88,
    weight_max: 110
  },
  {
    breed_name: 'Dogo Argentino',
    height_min: 24,
    height_max: 27,
    weight_min: 77,
    weight_max: 99
  },
  {
    breed_name: 'Bakharwal',
    height_min: 24,
    height_max: 30,
    weight_min: 150,
    weight_max: 200
  },
  {
    breed_name: 'Serbian Hound (Balkan)',
    height_min: 17,
    height_max: 22,
    weight_min: 39,
    weight_max: 44
  },
  {
    breed_name: 'Thai Bangkaew',
    height_min: 17,
    height_max: 21,
    weight_min: 35,
    weight_max: 50
  },
  {
    breed_name: 'Barbet',
    height_min: 20,
    height_max: 26,
    weight_min: 31,
    weight_max: 62
  },
  {
    breed_name: 'Basenji',
    height_min: 15,
    height_max: 17,
    weight_min: 22,
    weight_max: 24
  },
  {
    breed_name: 'Basset Hound',
    height_min: 11,
    height_max: 15,
    weight_min: 44,
    weight_max: 64
  },
  {
    breed_name: 'Beagle',
    height_min: 13,
    height_max: 16,
    weight_min: 20,
    weight_max: 24
  },
  {
    breed_name: 'Bernese Mountain Dog',
    height_min: 23,
    height_max: 28,
    weight_min: 79,
    weight_max: 110
  },
  {
    breed_name: 'Bhagyari Kutta',
    height_min: 20,
    height_max: 25,
    weight_min: 77,
    weight_max: 99
  },
  {
    breed_name: 'Bichon Frise',
    height_min: 9,
    height_max: 11,
    weight_min: 8,
    weight_max: 15
  },
  {
    breed_name: 'Biewer Terrier',
    height_min: 7,
    height_max: 11,
    weight_min: 4,
    weight_max: 8
  },
  {
    breed_name: 'Blue Heeler',
    height_min: 17,
    height_max: 20,
    weight_min: 31,
    weight_max: 35
  },
  {
    breed_name: 'Bluetick Coonhound',
    height_min: 21,
    height_max: 27,
    weight_min: 45,
    weight_max: 80
  },
  {
    breed_name: 'Boerboel',
    height_min: 23,
    height_max: 28,
    weight_min: 120,
    weight_max: 170
  },
  {
    breed_name: 'Bohemian Shepherd (Chodenhund)',
    height_min: 19,
    height_max: 22,
    weight_min: 35,
    weight_max: 55
  },
  {
    breed_name: 'Border Collie',
    height_min: 18,
    height_max: 22,
    weight_min: 30,
    weight_max: 45
  },
  {
    breed_name: 'Borzoi',
    height_min: 28,
    height_max: 32,
    weight_min: 75,
    weight_max: 105
  },
  {
    breed_name: 'Boxer',
    height_min: 21,
    height_max: 25,
    weight_min: 55,
    weight_max: 71
  },
  {
    breed_name: 'Bracco Italiano',
    height_min: 22,
    height_max: 26,
    weight_min: 55,
    weight_max: 88
  },
  {
    breed_name: 'Braque Dupuy',
    height_min: 26,
    height_max: 27,
    weight_min: 49,
    weight_max: 62
  },
  {
    breed_name: 'Briard',
    height_min: 22,
    height_max: 27,
    weight_min: 50,
    weight_max: 90
  }
];

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;