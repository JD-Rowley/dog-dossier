const seedBreeds = require('./breed-seed');
const seedColors = require('./color-seed');
const seedHealth = require('./health-seed');
const seedLevels = require('./level-seed');
const seedPosts = require('./post-seed');
const seedTraits = require('./traits-seed');
const seedUsers = require('./user-seed');
const seedBreedColors = require('./breedColor-seed');
const seedBreedHealth = require('./breedHealth-seed');
const seedBreedTraits = require('./breedTrait-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedColors();
  console.log('\n----- COLORS SEEDED -----\n');

  await seedHealth();
  console.log('\n----- HEALTH SEEDED -----\n');

  // await seedLevels();
  // console.log('\n----- LEVELS SEEDED -----\n');

  // await seedPosts();
  // console.log('\n----- POSTS SEEDED -----\n');

  await seedTraits();
  console.log('\n----- TRAITS SEEDED -----\n');

  // await seedUsers();
  // console.log('\n----- USERS SEEDED -----\n');

  await seedBreeds();
  console.log('\n----- BREEDS SEEDED -----\n');

  await seedBreedColors();
  console.log('\n----- BREEDCOLORS SEEDED -----\n');

  await seedBreedHealth();
  console.log('\n----- BREEDHEALTH SEEDED -----\n');

  await seedBreedTraits();
  console.log('\n----- BREEDTRAITS SEEDED -----\n');

  process.exit(0);
};

seedAll();