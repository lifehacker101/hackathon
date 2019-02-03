import { Template } from 'meteor/templating';
import { Lessons } from '../api/lessons.js';
import './createlesson.html'
Template.createlesson.events({
    'submit .new-lesson'(event) {
        // prevent default submit
        event.preventDefault();

        // get value from form element
        const target = event.target;
        // get lesson value
        const lesson = target.lesson.value;
        const videolink = target.videolink.value;
        // add data to collection
        Lessons.insert({
            lesson,
            videolink,
            createdAt: new Date()
        });
        Bert.alert("Lesson created", "success", "growl-top-right");
        // clear form
        target.lesson.value='';
        target.videolink.value='';

    }
})