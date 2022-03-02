'use strict';

/**
 * test-henriette service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-henriette.test-henriette');
