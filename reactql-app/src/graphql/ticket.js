/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { imputationType } from './imputation';
import { alertType } from './alert';
import { messageType } from './message';

export const ticketType = new GraphQLObjectType({
  name: 'Ticket',
  description: 'One Ticket',
  fields() {
    return {
      id: {
        type: GraphQLString,
        resolve(ticket) {
          return ticket.id;
        },
      },
      openAt: {
        type: GraphQLString,
        resolve(ticket) {
          return ticket.openAt;
        },
      },
      updateAt: {
        type: GraphQLString,
        resolve(ticket) {
          return ticket.updateAt;
        },
      },
      closeAt: {
        type: GraphQLString,
        resolve(ticket) {
          return ticket.closeAt;
        },
      },
      imputation: {
        type: imputationType,
        resolve(ticket) {
          return ticket.imputation;
        },
      },
      alert: {
        type: alertType,
        resolve(ticket) {
          return ticket.alert;
        },
      },
      messages: {
        type: messageType,
        resolve(ticket) {
          return ticket.alert;
        },
      },
    };
  },
});
