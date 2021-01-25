const { gql } = require('@apollo/client');
const { setupApp } = require('../helper-functions');
let operations;

const wrongID = '6009dcd5f9855555907ebf5e';

const color = {
  name: [
    { lang: 'ua', value: 'Світsadas' },
    { lang: 'en', value: 'blackdasdas' },
  ],
  colorHex: '#f47ac6',
  simpleName: [
    { lang: 'ua', value: 'Чорний' },
    { lang: 'en', value: 'black' },
  ],
};

const newMaterial = colorID => ({
  name: [
    { lang: 'ua', value: 'тканина кордура' },
    { lang: 'en', value: 'Cordura fabric' },
  ],
  description: [
    { lang: 'ua', value: 'описання' },
    { lang: 'en', value: 'some description' },
  ],
  purpose: 'some purpose',
  colors: colorID,
  available: true,
  additionalPrice: 0,
});

const createColor = async newColor => {
  operations = await setupApp();
  const addColor = await operations.mutate({
    mutation: gql`
      mutation($data: ColorInput!) {
        addColor(data: $data) {
          ... on Color {
            _id
            name {
              lang
              value
            }
            colorHex
            simpleName {
              lang
              value
            }
          }
        }
      }
    `,
    variables: { data: newColor },
  });
  return addColor.data.addColor._id;
};
const createMaterial = async newMaterial => {
  operations = await setupApp();
  const addMaterial = await operations.mutate({
    mutation: gql`
      mutation($material: MaterialInput!) {
        addMaterial(material: $material) {
          ... on Material {
            _id
            name {
              lang
              value
            }
            colors {
              _id
            }
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    variables: { material: newMaterial },
  });
  return addMaterial.data.addMaterial._id;
};

const newConstructorBottom = (colorId, materialId) => ({
  name: [
    { lang: 'ua', value: 'Деяке імя' },
    { lang: 'en', value: 'Some name' },
  ],
  material: materialId,
  image: 'askjfsdgfaowifjsklfjlsfkjl',
  basePrice: 1,
  color: colorId,
  available: true,
  default: true,
});

const getConstructorData = construrtor => ({
  name: [
    {
      lang: construrtor.name[0].lang,
      value: construrtor.name[0].value,
    },
    {
      lang: construrtor.name[1].lang,
      value: construrtor.name[1].value,
    },
  ],
  material: { _id: construrtor.material },
  color: { _id: construrtor.color },
  image: construrtor.image,
  available: construrtor.available,
  default: construrtor.default,
});

const deleteAll = async (colorID, materialID, constructorBottomID) => {
  const operations = await setupApp();

  const deleteConstructorBottom = await operations.mutate({
    mutation: gql`
      mutation($id: ID!) {
        deleteConstructorBottom(id: $id) {
          ... on ConstructorBottom {
            _id
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    variables: { id: constructorBottomID },
  });
  const deleteMaterial = await operations.mutate({
    mutation: gql`
      mutation($id: ID!) {
        deleteMaterial(id: $id) {
          ... on Material {
            _id
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    variables: { id: materialID },
  });

  const deleteColor = await operations.mutate({
    mutation: gql`
      mutation($id: ID!) {
        deleteColor(id: $id) {
          __typename
          ... on Color {
            _id
          }
          ... on Error {
            statusCode
            message
          }
        }
      }
    `,
    variables: { id: colorID },
  });

  return { deleteColor, deleteMaterial, deleteConstructorBottom };
};

const getConstructorDataForUpt = (materialId, colorId) => ({
  name: [
    { lang: 'ua', value: 'Деяке нове імя' },
    { lang: 'en', value: 'Some new name' },
  ],
  material: materialId,
  image: '/sdasdafasd',
  basePrice: 1,
  color: colorId,
  available: true,
  default: true,
});

module.exports = {
  color,
  wrongID,
  newMaterial,
  createMaterial,
  createColor,
  newConstructorBottom,
  getConstructorData,
  deleteAll,
  getConstructorDataForUpt,
};
