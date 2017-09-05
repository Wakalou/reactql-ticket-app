/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const accountableType = new GraphQLObjectType({
  name: 'accountable',
  description: 'accountable',
  fields() {
    return {
      id: {
        type: GraphQLString,
        resolve(accountable) {
          return accountable.id;
        },
      },
      name: {
        type: GraphQLString,
        resolve(accountable) {
          return accountable.name;
        },
      },
    };
  },
});
