// import all models 
const Breed = require('./Breed');
const Color = require('./Color');
const Health = require('./Health');
const Level = require('./Level');
const Post = require('./Post');
const Traits = require('./Traits');
const User = require('./User');

// associations
Breed.hasMany(Color, {
    foreignKey: 'color_id'
});

Breed.hasMany(Health, {
    foreignKey: 'health_id'
});

Breed.hasMany(Post, {
    foreignKey: 'post_id'
});

Breed.hasMany(Traits, {
    foreignKey: 'traits_id'
});

Traits.belongsTo(Breed, {
    foreignKey: 'traits_id'
});








module.exports = { Breed, Color, Level, Health, Traits, Post, User };