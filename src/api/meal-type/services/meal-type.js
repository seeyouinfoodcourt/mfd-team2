'use strict';

/**
 * meal-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meal-type.meal-type');
