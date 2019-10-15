'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Birds', [{
        id: 1,
        type: 'Parrot',
        city: 'San Francisco',
        description: 'Parrots have a heavy and compact body with a large head and a short neck. Their beaks are short, strong and curved.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        type: 'Sparrow',
        city: 'New York',
        description: 'Sparrows are small, plump, brown and grey birds with short tails and stubby, powerful beaks.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        type: 'Bald Eagle',
        city: 'Seattle',
        description: 'The bald eagle has sometimes been considered the largest true raptor in North America.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        type: 'Osprey',
        city: 'New York',
        description: 'In flight, the osprey has arched wings and drooping "hands", giving it a gull-like appearance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        type: 'Hawk',
        city: 'New York',
        description: 'Hawks are known to have sharp vision and to be able hunters. The female is generally larger than the male.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        type: 'Pigeon',
        city: 'London',
        description: 'Pigeons drink by sucking water and using their beaks like straws.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        type: 'Sparrow',
        city: 'Austin',
        description: 'Sparrows are small, plump, brown and grey birds with short tails and stubby, powerful beaks.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        type: 'Canary',
        city: 'New York',
        description: 'Wild canaries are a yellowish-green colour, domestic canaries have been selectively bred for a wide variety of colours, such as yellow, orange, brown, black, white, and red.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Birds', null, {});
  }
};