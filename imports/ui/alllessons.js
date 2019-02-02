import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './alllessons.html';
Template.alllessons.helpers({
    alllessons() {
        return Lessons.find({});
    }
});