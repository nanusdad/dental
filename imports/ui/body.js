import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ]
});

Template.procedureTab.helpers({
	assistants: [
	  	{ name: 'Anu'},
	  	{ name: 'Navadeep'},
	  	{ name: 'Cyril', title: 'Developer'}
  ]
});