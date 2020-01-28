import React, { Component } from 'react'
import NavBar from 'Common/NavBar/NavBar'
import Home from 'Home/Home'
import Footer from 'Common/Footer/Footer'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div><NavBar /><Home /><Footer /></div>
  }
}

export default Cover
