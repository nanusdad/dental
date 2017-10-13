import { Mongo } from 'meteor/mongo';

export const Clinics = new Mongo.Collection('clinics');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('clinics', function clinicsPublication() {
    return Clinics.find();
  });
}