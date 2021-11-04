const { User } = require('../models');

const userData = [
  {
    username: 'jd',
    email: 'jd@gmail.com',
    password: 'password'
  },
  {
    username: 'phil',
    email: 'phil@gmail.com',
    password: 'password'
  },
  {
    username: 'luke',
    email: 'luke@gmail.com',
    password: 'password'
  },
  {
    username: 'claire',
    email: 'claire@gmail.com',
    password: 'password'
  },
  {
    username: 'monica',
    email: 'monica@gmail.com',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
