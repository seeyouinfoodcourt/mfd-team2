'use strict';

/**
 * difficulty service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::difficulty.difficulty');
