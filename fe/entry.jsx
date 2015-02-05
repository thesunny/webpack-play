var $ = require('jquery')
var html = require('./SAMPLE-TEXT.md');

require("./styles.sass");
require('react')

$(document.body).append(html)

var template = <div>Hello World</div>

class Person {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
}
