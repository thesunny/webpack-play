# // Shared library test
# var $ = require('jquery')

# // // Markdown test
# var html = require('./SAMPLE-TEXT.md');
# $(document.body).append(html);

# // Load SASS test
# require("./styles.sass");

# var React = require('react');
# var Hello = require('./hello.coffee');

# // CoffeeScript
# var Coffee = require('./coffee.coffee');
# console.log(Coffee)

# // ES6 Classes Test (Harmony)
# class Person {
#   constructor(firstName, lastName) {
#     this.firstName = firstName;
#     this.lastName = lastName;
#   }
# }
# var person = new Person('John', 'Doe');
# console.log(person);

# $(document).on('ready', function () {
#   var mainElement = $('#main')[0];
#   React.render(<Hello name="John Doe"/>, mainElement);
# });

# // Use this as a reload test (change the number and save)
# console.log(1);

$ = require 'jquery'
React = require 'react'

Hello = require './hello.coffee'

$(document).on 'ready', ->
  node = $('#main')[0]
  React.render <Hello name="John Doe"/>, node