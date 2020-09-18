const { gql } = require('apollo-boost');
const client = require('../utils/apollo-test-client');
require('dotenv').config();

const adminLogin = async user => {
  const result = await client.mutate({
    mutation: gql`
      mutation($user: LoginInput!) {
        loginAdmin(loginInput: $user) {
          token
        }
      }
    `,
    variables: {
      user,
    },
  });

  const { token } = result.data.loginAdmin;

  return token;
};
module.exports = { adminLogin };
