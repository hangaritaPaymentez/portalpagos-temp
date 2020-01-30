import React, { Component } from 'react';
import NavBar from 'components/Common/NavBar/NavBar';
import Footer from 'components/Common/Footer/Footer';
import Home from 'pages/Home/Home';
// import ListSection from 'pages/ListSection/ListSection';
// import Login from 'pages/user/login'
// import { Layout } from 'antd'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <NavBar />
        {/* <ListSection /> */}
        <Home />
        <Footer />
      </div>
    )
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
