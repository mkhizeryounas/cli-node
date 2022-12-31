const logger = require('./utils/logger');
const { convertToNumber } = require('./utils/common');
logger.debug('Hello World', convertToNumber('a'));
