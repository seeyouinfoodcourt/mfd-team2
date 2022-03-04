'use strict';

/**
 * recipe-ingredient service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe-ingredient.recipe-ingredient');
