import React from 'react'
import { Row, Col, Icon, Input } from 'antd'

const Searchbar = () => {
  return (
    <Row>
      <Col sm={24} md={10} lg={20} className="home__search">
        <Icon type="search" className="search__icon" />
        <Input 
          type="search"
          name="search"
          id="exampleSearch"
          className="search__input"
          placeholder="Buscar comercio"
        />
      </Col>
    </Row>
  )
}

export default Searchbar
