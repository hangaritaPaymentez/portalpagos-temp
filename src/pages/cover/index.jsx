import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBar from 'components/Common/NavBar/NavBar'
import Home from 'pages/Home/Home'
import Footer from 'components/Common/Footer/Footer'

const { Content } = Layout

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout className="container-view">
        <NavBar />
        <Content className="full-centering container-content">
          <Home />
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export default Cover
