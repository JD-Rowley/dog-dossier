// import all models 
const Breed = require('./Breed');
const Color = require('./Color');
const Health = require('./Health');
const Level = require('./Level');
const Post = require('./Post');
const Traits = require('./Traits');
const User = require('./User');
const BreedColor = require('./BreedColor');
const BreedHealth = require('./BreedHealth');
const BreedTraits = require('./BreedTraits');

// associations
Breed.belongsToMany(Color, {
    through: 'BreedColor',
    as: 'color'
});

Breed.belongsToMany(Health, {
    through: 'BreedHealth',
    as: 'health'
});

Breed.belongsToMany(Traits, {
    through: 'BreedTraits',
    as: 'traits'
});

Level.hasMany(Breed, {
    foreignKey: 'level_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { Breed, Color, Level, Health, Traits, Post, User, BreedColor, BreedHealth, BreedTraits };