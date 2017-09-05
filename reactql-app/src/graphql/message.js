/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

// Message type.  Imagine this like static type hinting on the 'message'
// object we're going to throw back to the user
export const messageType = new GraphQLObjectType({
  name: 'Message',
  description: 'GraphQL server message',
  fields() {
    return {
      text: {
        type: GraphQLString,
        resolve(msg) {
          return msg.text;
        },
      },
      author: {
        type: GraphQLString,
        resolve(msg) {
          return msg.author;
        },
      },
      createAt: {
        type: GraphQLString,
        resolve(msg) {
          return msg.createAt;
        },
      },
    };
  },
});
