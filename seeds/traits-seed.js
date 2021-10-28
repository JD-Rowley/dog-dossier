const { Traits } = require('../models');

const traitsData = [
  {
    traits_name: 'stubborn'
  },
  {
    traits_name: 'independent'
  },
  {
    traits_name: 'intelligent'
  },
  {
    traits_name: 'hardworking'
  },
  {
    traits_name: 'active'
  },
  {
    traits_name: 'inactive'
  },
  {
    traits_name: 'family-oriented'
  },
  {
    traits_name: 'loyal'
  },
  {
    traits_name: 'protective'
  },
  {
    traits_name: 'aggressive'
  },
  {
    traits_name: 'digger'
  },
  {
    traits_name: 'chewer'
  },
  {
    traits_name: 'licker'
  },
  {
    traits_name: 'prey-oriented'
  },
  {
    traits_name: 'agile'
  },
  {
    traits_name: 'docile'
  },
  {
    traits_name: 'dominant'
  },
  {
    traits_name: 'goofy'
  },
  {
    traits_name: 'affectionate'
  },
  {
    traits_name: 'challenging'
  },
  {
    traits_name: 'gentle'
  },
  {
    traits_name: 'submissive'
  },
  {
    traits_name: 'strong-willed'
  },
  {
    traits_name: 'food-oriented'
  },
  {
    traits_name: 'praise-oriented'
  },
  {
    traits_name: 'lazy'
  },
  {
    traits_name: 'energetic'
  },
  {
    traits_name: 'toy-oriented'
  },
  {
    traits_name: 'strong'
  },
  {
    traits_name: 'fast'
  },
  {
    traits_name: 'easily trainable'
  },
  {
    traits_name: 'vocal'
  },
  {
    traits_name: 'quiet'
  },
  {
    traits_name: 'needy'
  }
];

const seedTraits = () => Traits.bulkCreate(traitsData);

module.exports = seedTraits;
