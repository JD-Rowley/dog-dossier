const { Color } = require('../models');

const colorData = [
  {
    color_name: 'black'
  },
  {
    color_name: 'black & tan'
  },
  {
    color_name: 'white'
  },
  {
    color_name: 'tan'
  },
  {
    color_name: 'merle'
  },
  {
    color_name: 'blue merle'
  },
  {
    color_name: 'brown'
  },
  {
    color_name: 'spotted'
  },
  {
    color_name: 'leopard'
  },
  {
    color_name: 'cream'
  },
  {
    color_name: 'rust'
  },
  {
    color_name: 'blue'
  },
  {
    color_name: 'apricot'
  },
  {
    color_name: 'fawn'
  },
  {
    color_name: 'red'
  },
  {
    color_name: 'silver'
  },
  {
    color_name: 'chestnut'
  },
  {
    color_name: 'beige'
  },
  {
    color_name: 'gold'
  },
  {
    color_name: 'light brown'
  },
  {
    color_name: 'yellow'
  },
  {
    color_name: 'gray'
  },
  {
    color_name: 'wheaten'
  },
  {
    color_name: 'orange'
  },
  {
    color_name: 'lilac'
  },
  {
    color_name: 'brindle'
  },
  {
    color_name: 'tri-color'
  },
  {
    color_name: 'white & red'
  },
  {
    color_name: 'white & blue'
  },
  {
    color_name: 'silver & black'
  },
  {
    color_name: 'white & tan'
  },
  {
    color_name: 'white & black'
  }
];

const seedColors = () => Color.bulkCreate(colorData);

module.exports = seedColors;
