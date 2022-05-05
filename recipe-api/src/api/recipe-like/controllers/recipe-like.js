'use strict';

/**
 *  recipe-like controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recipe-like.recipe-like');
