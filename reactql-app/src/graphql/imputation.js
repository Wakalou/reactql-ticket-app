
/* eslint-disable import/prefer-default-export */

import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { accountableType } from './accountable';

export const imputationType = new GraphQLObjectType({
  name: 'imputation',
  description: 'imputation',
  fields() {
    return {
      id: {
        type: GraphQLString,
        resolve(imputation) {
          return imputation.id;
        },
      },
      startAt: {
        type: GraphQLString,
        resolve(imputation) {
          return imputation.startAt;
        },
      },
      endAt: {
        type: GraphQLString,
        resolve(imputation) {
          return imputation.endAt;
        },
      },
      reason: {
        type: GraphQLString,
        resolve(imputation) {
          return imputation.Reason;
        },
      },
      accountable: {
        type: accountableType,
        resolve(imputation) {
          return imputation.Reason;
        },
      },
    };
  },
});
