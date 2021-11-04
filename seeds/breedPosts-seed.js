const { BreedPosts } = require('../models');

const breedPostData = [
    {
        breed_id: 1,
        post_id: 2
    },
    {
        breed_id: 1,
        post_id: 1
    },
    {
        breed_id: 1,
        post_id: 3
    },
    {
        breed_id: 1,
        post_id: 5
    },
    {
        breed_id: 1,
        post_id: 4
    },
    // {
    //     breed_id: 1,
    //     post_id: 4
    // },
    // {
    //     breed_id: 5,
    //     post_id: 6
    // },
    // {
    //     breed_id: 5,
    //     post_id: 27
    // },
    // {
    //     breed_id: 6,
    //     post_id: 28
    // },
    // {
    //     breed_id: 7,
    //     post_id: 2
    // },
    // {
    //     breed_id: 8,
    //     post_id: 1
    // },
    // {
    //     breed_id: 9,
    //     post_id: 5
    // },
    // {
    //     breed_id: 9,
    //     post_id: 6
    // },
    // {
    //     breed_id: 10,
    //     post_id: 7
    // },
    // {
    //     breed_id: 10,
    //     post_id: 11
    // },
    // {
    //     breed_id: 11,
    //     post_id: 1
    // },
    // {
    //     breed_id: 11,
    //     post_id: 11
    // },
    // {
    //     breed_id: 11,
    //     post_id: 15
    // },
    // {
    //     breed_id: 12,
    //     post_id: 1
    // },
    // {
    //     breed_id: 13,
    //     post_id: 2
    // },
    // {
    //     breed_id: 14,
    //     post_id: 1
    // },
    // {
    //     breed_id: 15,
    //     post_id: 1
    // },
    // {
    //     breed_id: 15,
    //     post_id: 2
    // },
    // {
    //     breed_id: 16,
    //     post_id: 22
    // },
    // {
    //     breed_id: 17,
    //     post_id: 32
    // },
    // {
    //     breed_id: 18,
    //     post_id: 23
    // },
    // {
    //     breed_id: 19,
    //     post_id: 1
    // },
    // {
    //     breed_id: 20,
    //     post_id: 1
    // },
    // {
    //     breed_id: 21,
    //     post_id: 1
    // },
    // {
    //     breed_id: 21,
    //     post_id: 23
    // },
    // {
    //     breed_id: 21,
    //     post_id: 2
    // },
    // {
    //     breed_id: 22,
    //     post_id: 2
    // },
    // {
    //     breed_id: 22,
    //     post_id: 20
    // },
    // {
    //     breed_id: 23,
    //     post_id: 1
    // },
    // {
    //     breed_id: 24,
    //     post_id: 1
    // },
    // {
    //     breed_id: 25,
    //     post_id: 2
    // },
    // {
    //     breed_id: 26,
    //     post_id: 3
    // },
    // {
    //     breed_id: 26,
    //     post_id: 10
    // },
    // {
    //     breed_id: 26,
    //     post_id: 27
    // },
    // {
    //     breed_id: 27,
    //     post_id: 4
    // },
    // {
    //     breed_id: 28,
    //     post_id: 3
    // },
    // {
    //     breed_id: 29,
    //     post_id: 31
    // },
    // {
    //     breed_id: 30,
    //     post_id: 4
    // },
    // {
    //     breed_id: 31,
    //     post_id: 2
    // },
    // {
    //     breed_id: 32,
    //     post_id: 3
    // },
    // {
    //     breed_id: 33,
    //     post_id: 1
    // },
    // {
    //     breed_id: 33,
    //     post_id: 4
    // },
    // {
    //     breed_id: 34,
    //     post_id: 2
    // },
    // {
    //     breed_id: 35,
    //     post_id: 31
    // },
    // {
    //     breed_id: 36,
    //     post_id: 1
    // },
    // {
    //     breed_id: 36,
    //     post_id: 7
    // },
    // {
    //     breed_id: 36,
    //     post_id: 17
    // },
    // {
    //     breed_id: 37,
    //     post_id: 31
    // },
    // {
    //     breed_id: 38,
    //     post_id: 27
    // },
    // {
    //     breed_id: 39,
    //     post_id: 27
    // },
    // {
    //     breed_id: 40,
    //     post_id: 27
    // },
    // {
    //     breed_id: 41,
    //     post_id: 2
    // },
    // {
    //     breed_id: 42,
    //     post_id: 3
    // },
    // {
    //     breed_id: 43,
    //     post_id: 27
    // },
    // {
    //     breed_id: 44,
    //     post_id: 6
    // },
    // {
    //     breed_id: 45,
    //     post_id: 6
    // },
    // {
    //     breed_id: 45,
    //     post_id: 9
    // },
    // {
    //     breed_id: 46,
    //     post_id: 4
    // },
    // {
    //     breed_id: 46,
    //     post_id: 26
    // },
    // {
    //     breed_id: 47,
    //     post_id: 2
    // },
    // {
    //     breed_id: 48,
    //     post_id: 27
    // },
    // {
    //     breed_id: 48,
    //     post_id: 32
    // },
    // {
    //     breed_id: 49,
    //     post_id: 3
    // },
    // {
    //     breed_id: 49,
    //     post_id: 28
    // },
    // {
    //     breed_id: 49,
    //     post_id: 1
    // },
    // {
    //     breed_id: 50,
    //     post_id: 26
    // },
    // {
    //     breed_id: 50,
    //     post_id: 4
    // },
    // {
    //     breed_id: 51,
    //     post_id: 31
    // },
    {
        breed_id: 52,
        post_id: 6
    },
    {
        breed_id: 52,
        post_id: 7
    }
];

const seedBreedPosts = () => BreedPosts.bulkCreate(breedPostData);

module.exports = seedBreedPosts;