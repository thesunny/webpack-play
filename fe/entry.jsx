// Shared library test
var $ = require('jquery')

// Markdown test
var html = require('./SAMPLE-TEXT.md');
$(document.body).append(html);

// Load SASS test
var sass = require("./styles.sass");

var React = require('react');

// React JSX Test
var template = <div>Hello World</div>

// ES6 Classes Test (Harmony)
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Use this as a reload test
console.log(1);
