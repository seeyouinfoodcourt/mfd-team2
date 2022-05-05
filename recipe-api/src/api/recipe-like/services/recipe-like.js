'use strict';

/**
 * recipe-like service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipe-like.recipe-like');
