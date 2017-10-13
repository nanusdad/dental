import { Mongo } from 'meteor/mongo';

export const Assistants = new Mongo.Collection('assistants');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('assistants', function assistantsPublication() {
    return Assistants.find();
  });
}