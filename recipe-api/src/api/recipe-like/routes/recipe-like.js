'use strict';

/**
 * recipe-like router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recipe-like.recipe-like');
