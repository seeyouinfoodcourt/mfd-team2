'use strict';

/**
 * unit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unit.unit');
