React = require 'react'

Hello = React.createClass
  render: ->
    <h1>Hello There 2 {@props.name}</h1>

module.exports = Hello
