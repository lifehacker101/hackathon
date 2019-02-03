import { Lessons } from "../imports/api/lessons";

Router.configure({
    layoutTemplate: 'main_layout'
});

// lessons path
Router.map(function(){
    this.route('lessons', {
        path: '/lessons',
        template: 'lessons'
    }),
    this.route('alllessons', {
        path: '/alllessons',
        template: 'alllessons'
    }),
    this.route('/lesson/:lesson', {
        template: 'lesson',
        data: function(){
            var currentLesson = this.params.lesson;
            console.log(Lessons.findOne({ lesson: currentLesson}));
            return Lessons.findOne({ lesson: currentLesson});
        }
    }),
    this.route('home', {
        path: '/',
        template: 'home'
    }),
    this.route('profile', {
        path: '/profile',
        template: 'profile'
    }),
    this.route('createlesson', {
        path: '/createlesson',
        template: 'createlesson'
    })
})

