import { Template } from 'meteor/templating';
import { Procedures } from '../api/procedures.js';

Template.procedurelistTab.helpers({
  procedures() {
    return Procedures.find({});
  }
});