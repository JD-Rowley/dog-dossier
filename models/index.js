// import all models 
const Breed = require('./Breed');
const Color = require('./Color');
const Health = require('./Health');
// const Level = require('./Level');
// const Post = require('./Post');
const Traits = require('./Traits');
const BreedColor = require('./BreedColor');
const BreedHealth = require('./BreedHealth');
const BreedTraits = require('./BreedTraits');
const User = require('./User');

// associations
Breed.belongsToMany(Color, {
    through: 'breedColor',
});

Color.belongsToMany(Breed, {
    through: 'breedColor',
});

Breed.belongsToMany(Health, {
    through: 'breedHealth',
});

Health.belongsToMany(Breed, {
    through: 'breedHealth',
});

Breed.belongsToMany(Traits, {
    through: 'breedTraits',
});

Traits.belongsToMany(Breed, {
    through: 'breedTraits',
});

// Level.hasMany(Breed, {
//     constraints: false,
//     foreignKey: 'level_id'
// });

// Breed.hasOne(Level, {
//     constraints: false,
//     foreignKey: 'id'
// })

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id'
// });

module.exports = { Breed, Color, Health, Traits, BreedColor, BreedHealth, BreedTraits, User };