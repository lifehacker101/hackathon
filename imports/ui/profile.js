import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './profile.html';

// sample data
Template.profile.helpers({
    profilelessons() {
        return Lessons.find({});
    }
});