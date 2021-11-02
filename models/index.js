const Breed = require('./Breed');
const Color = require('./Color');
const Health = require('./Health');
const Level = require('./Level');
const Traits = require('./Traits');
const BreedColor = require('./BreedColor');
const BreedHealth = require('./BreedHealth');
const BreedTraits = require('./BreedTraits');
const User = require('./User');
const Post = require('./Post');

// associations
Breed.belongsToMany(Color, {
    through: 'breedColor',
    foreignKey: 'color_id'
});

Color.belongsToMany(Breed, {
    through: 'breedColor',
    foreignKey: 'color_id'
});

Breed.belongsToMany(Health, {
    through: 'breedHealth',
    foreignKey: 'health_id'
});

Health.belongsToMany(Breed, {
    through: 'breedHealth',
    foreignKey: 'health_id'
});

Breed.belongsToMany(Traits, {
    through: 'breedTraits',
    foreignKey: 'traits_id'
});

Traits.belongsToMany(Breed, {
    through: 'breedTraits',
    foreignKey: 'traits_id'
});

// Level.hasMany(Breed, {
//     foreignKey: 'level_id'
// });

// Breed.hasOne(Level, {
//     foreignKey: 'id'
// })

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Breed, Color, Health, Level, Traits, BreedColor, BreedHealth, BreedTraits, User, Post };