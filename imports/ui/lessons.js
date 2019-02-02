import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './lessons.html';

// sample data
Template.lessons.helpers({
    lessons() {
        return Lessons.find({});
    }
});