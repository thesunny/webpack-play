React = require 'react'

Hello = React.createClass
  render: ->
    <h1>Hello {@props.name}</h1>

module.exports = Hello
