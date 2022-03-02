'use strict';

/**
 * test-line router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-line.test-line');
