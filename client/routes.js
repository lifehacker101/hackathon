
Router.configure({
    layoutTemplate: 'main_layout'
});

// lessons path
Router.map(function(){
    this.route('lessons', {
        path: '/lessons',
        template: 'lessons'
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

