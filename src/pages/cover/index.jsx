import React, { Component } from 'react'
import NavBar from 'Common/NavBar/NavBar'
import Home from 'Home/Home'
import Footer from 'Common/Footer/Footer'
// import Login from 'pages/user/login'
// import { Layout } from 'antd'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div><NavBar /><Home /><Footer /></div>
    // return (
    //   <Layout className="login">
    //     <Layout.Content className="full-centering container-content">
    //       <Login />
    //     </Layout.Content>
    //   </Layout>
    // )
  }
}

export default Cover
