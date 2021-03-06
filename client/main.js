import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// importing templates
import '../imports/ui/home.html';
import '../imports/ui/profile.html';
import '../imports/ui/navbar.html';
import '../imports/ui/createlesson.html';
import '../imports/ui/profilelesson.html';
import '../imports/ui/alllessons.html';
import '../imports/ui/lesson.html';

// importing js files
import '../imports/ui/profile.js';
import '../imports/ui/createlesson.js';
import '../imports/ui/alllessons.js';
import '../imports/ui/lesson.js';

import './routes.js';