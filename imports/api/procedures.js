import { Mongo } from 'meteor/mongo';

export const Procedures = new Mongo.Collection('procedures');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('procedures', function proceduresPublication() {
    return Procedures.find();
  });
}