import React from 'react'
import { Row, Col, Breadcrumb, Select, List } from 'antd'
import Searchbar from 'Common/Searchbar/Searchbar'
import './styles.less'

const { Option } = Select

const ListSection = () => {
  const handleSortLetter = value => {
    console.log(value)
  }

  return (
    <section>
      <Row>
        <Col offset={3}>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={19} lg={{ span: 19, offset: 3 }} xl={{ span: 20, offset: 3 }}>
          <div className="listSection__bkgImg">
            <h2>Concesionario</h2>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col sm={24} md={24} lg={{ span: 12, offset: 2 }} xl={{ span: 13, offset: 3 }}>
          <Searchbar />
        </Col>
        <Col sm={24} md={24} lg={{ span: 4 }} xl={{ span: 4 }}>
          <Select
            labelInValue
            defaultValue={{ key: 'A - Z' }}
            style={{ width: 120 }}
            onChange={handleSortLetter}
          >
            <Option value="A - Z">A - Z</Option>
            <Option value="Z - A">Z - A</Option>
          </Select>
        </Col>
        <Col sm={24} md={24} lg={{ span: 4 }} xl={{ span: 4 }}>
          <Select
            labelInValue
            defaultValue={{ key: 'Todas las ciudades' }}
            style={{ width: 160 }}
            onChange={handleSortLetter}
          >
            <Option value="Todas las ciudades">Todas las ciudades</Option>
            <Option value="Z - A">Z - A</Option>
          </Select>
        </Col>
      </Row>
      <Row type="flex" justify="start" align="middle">
        <Col offset={3}>
          letra
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">title</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <p>Content</p>
          </List.Item>
        </Col>
      </Row>
    </section>
  )
}

export default ListSection
