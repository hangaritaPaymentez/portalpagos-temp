import React from 'react'
import { Row, Col, Icon, Input } from 'antd'

import './styles.less'

const Searchbar = () => {
  return (
    <Row>
      <Col sm={24} md={10} lg={20} className="home__search">
        <Icon type="search" />
        <div>
          <Input type="search" name="search" id="exampleSearch" placeholder="Buscar comercio" />
        </div>
      </Col>
    </Row>
  )
}

export default Searchbar
