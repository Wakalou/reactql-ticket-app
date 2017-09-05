/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export const alertType = new GraphQLObjectType({
  name: 'alert',
  description: 'alert',
  fields() {
    return {
      id: {
        type: GraphQLString,
        resolve(alert) {
          return alert.id;
        },
      },
      description: {
        type: GraphQLString,
        resolve(alert) {
          return alert.description;
        },
      },
      startAt: {
        type: GraphQLString,
        resolve(alert) {
          return alert.startAt;
        },
      },
      endAt: {
        type: GraphQLString,
        resolve(alert) {
          return alert.endAt;
        },
      },
    };
  },
});
