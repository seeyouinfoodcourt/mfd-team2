'use strict';

/**
 * test-line service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-line.test-line');
