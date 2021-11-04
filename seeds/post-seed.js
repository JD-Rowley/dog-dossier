const { Post } = require('../models');

const postData = [
  {
    title: 'Test',
    post_body: 'lorem ipsum',
    user_id: 1
  },
  {
    title: 'Test',
    post_body: 'lorem ipsum',
    user_id: 1
  },
  {
    title: 'Test',
    post_body: 'lorem ipsum',
    user_id: 1
  },
  {
    title: 'Test',
    post_body: 'lorem ipsum',
    user_id: 1
  },
  {
    title: 'Test',
    post_body: 'lorem ipsum',
    user_id: 1
  },
  {
    title: 'Ear problems',
    post_body: 'I noticed my catahoulas have bad ear problems. Probiotics have been helping. Has anyone else experienced this?',
    user_id: 3
  },
  {
    title: 'Jumping',
    post_body: 'How high can your catahoula jump? Mine clears our 6 foot fence!',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
