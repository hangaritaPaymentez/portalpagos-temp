import React, { Component } from 'react'
import { Layout } from 'antd'
import NavBar from 'components/Common/NavBar/NavBar'
import Footer from 'components/Common/Footer/Footer'

const { Content } = Layout

class BasicLayout extends Component {
  render() {
    const { children = null } = this.props
    return (
      <Layout className="container-view">
        <NavBar />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    )
  }
}

export default BasicLayout
