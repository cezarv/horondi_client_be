const modelType = `  
type Model {
    _id: ID!
    category: Category!,
    name: [Language],
    description: [Language],
    images: ImageSet,
    priority: Int,
    show: Boolean,
    availableForConstructor: Boolean,
    constructorBasic:[ConstructorBasic]
    constructorPattern:[Pattern],
    constructorFrontPocket:[ConstructorFrontPocket],
    constructorBottom:[ConstructorBottom]
    sizes: [Size]
  }
`;
const modelInput = `
input ModelInput {
    category: ID!,
    name: [LanguageInput],
    description: [LanguageInput],
    images: ImageSetInput,
    priority: Int,
    show: Boolean,
    sizes: [ID]
    availableForConstructor: Boolean,
    constructorBasic:[ID],
    constructorPattern:[ID],
    constructorFrontPocket:[ID],
    constructorBottom:[ID]
  }`;

module.exports = {
  modelType,
  modelInput,
};
