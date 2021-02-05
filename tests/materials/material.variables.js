const materialDoesNotExistId = '1f2ad410eb01783384e6111b';
const graphqlErrorMessage = 'Skip value must be non-negative, but received: -5';
const skip = 0;
const wrongSkip = -5;
const wrongLimit = -3;
const limit = 2;
const limitZero = 0;
const getMaterial = colorId => ({
  name: [
    { lang: 'uk', value: 'Матеріал test' },
    { lang: 'en', value: 'Material test' },
  ],
  ...materialOptions,
  colors: [colorId],
});
const getMaterialToUpdate = colorId => ({
  name: [
    { lang: 'uk', value: 'Матеріал update' },
    { lang: 'en', value: 'Material update' },
  ],
  ...materialOptions,
  colors: [colorId],
});
const materialOptions = {
  description: [
    { lang: 'uk', value: 'Опис test' },
    { lang: 'en', value: 'Description test' },
  ],
  purpose: 'INNER',
  available: true,
};

module.exports = {
  materialDoesNotExistId,
  graphqlErrorMessage,
  skip,
  wrongSkip,
  wrongLimit,
  limit,
  limitZero,
  getMaterial,
  getMaterialToUpdate,
};
