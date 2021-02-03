const wrongId = '5f311ec5f2983e390432a8c3';
const skip = 0;
const wrongSkip = -1;
const wrongLimit = -5;
const limit = 5;
const testImages = {
  large: 'large_test-file',
  medium: 'medium_test-file',
  small: 'small_test-file',
  thumbnail: 'thumbnail_test-file',
};
const testValue = 'test value';
const updateValue = 'update value';
const mutationPatternToAdd = {
  name: [
    {
      lang: 'uk',
      value: testValue,
    },
    {
      lang: 'en',
      value: testValue,
    },
  ],
  description: [
    {
      lang: 'uk',
      value: testValue,
    },
    {
      lang: 'en',
      value: testValue,
    },
  ],
  handmade: false,
  available: true,
};
const queryPatternToAdd = {
  name: [
    {
      lang: 'uk',
      value: testValue,
    },
    {
      lang: 'en',
      value: testValue,
    },
  ],
  description: [
    {
      lang: 'uk',
      value: testValue,
    },
    {
      lang: 'en',
      value: testValue,
    },
  ],
  images: testImages,
  handmade: false,
  available: true,
};
const patternToUpdate = {
  name: [
    {
      lang: 'uk',
      value: updateValue,
    },
    {
      lang: 'en',
      value: updateValue,
    },
  ],
  description: [
    {
      lang: 'uk',
      value: updateValue,
    },
    {
      lang: 'en',
      value: updateValue,
    },
  ],
  images: {
    large: 'update',
    medium: 'update',
    small: 'update',
    thumbnail: 'update',
  },
  available: true,
  handmade: false,
};

module.exports = {
  patternToUpdate,
  wrongId,
  skip,
  limit,
  wrongSkip,
  wrongLimit,
  queryPatternToAdd,
  mutationPatternToAdd,
  testImages,
};
