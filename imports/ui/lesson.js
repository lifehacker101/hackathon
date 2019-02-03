import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './lesson.html';

// sample data
Template.lesson.helpers({
    lesson() {
        return Lessons.find({});
    }
});

Template.lesson.events({
    'submit .new-answer'(event) {
        event.preventDefault();
        // get value from element
        const target = event.target;
        // get lesson answer
        const answer = target.answer.value;
        var content = $(".question").text();
        const answers = Lessons.find({question: content});
        alert("good job +10 points")
        target.answer.value=""
    }
})