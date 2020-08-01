const patternService = require('./pattern.service');
const { PATTERN_NOT_FOUND } = require('../../error-messages/pattern.messages');

const patternQuery = {
  getAllPatterns: () => patternService.getAllPatterns(),
  getPatternById: async (parent, args) => {
    const pattern = await patternService.getPatternById(args.id);
    if (pattern) {
      return pattern;
    }
    return {
      statusCode: 404,
      message: PATTERN_NOT_FOUND,
    };
  },
};

const patternMutation = {
  addPattern: async (parent, args) => {
    try {
      return await patternService.addPattern(args.pattern);
    } catch (e) {
      return {
        statusCode: 400,
        message: e.message,
      };
    }
  },

  deletePattern: async (parent, args) => {
    const pattern = await patternService.deletePattern(args.id);
    if (pattern) {
      return pattern;
    }
    return {
      statusCode: 404,
      message: PATTERN_NOT_FOUND,
    };
  },

  updatePattern: async (parent, args) => {
    const pattern = await patternService.updatePattern(args.id, args.pattern);
    if (pattern) {
      return pattern;
    }
    return {
      statusCode: 404,
      message: PATTERN_NOT_FOUND,
    };
  },
};

module.exports = { patternQuery, patternMutation };
