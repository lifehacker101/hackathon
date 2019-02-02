import { Template } from 'meteor/templating';
import './lessons.html';
// sample data
Template.lessons.helpers({
    lessons: [
        {text: 'lesson 1'}
    ]
})