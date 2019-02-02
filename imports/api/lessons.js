import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
// create mongo collection
export const Lessons = new Mongo.Collection('lessons');