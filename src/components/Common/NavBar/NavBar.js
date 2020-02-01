/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Row, Col, Layout, Menu } from 'antd'
import logo from 'assets/img/logo.png'

const { Item } = Menu
const { Header } = Layout

const NavBar = () => {
  return (
    <Header className="bg-primary-color w-100 container-content">
      <Row>
        <Col sm={24} md={5} lg={{ span: 4, offset: 2 }} xl={{ span: 6 }}>
          <img src={logo} alt="logo" className="w-100" />
        </Col>
        <Col sm={12} md={4} lg={3} xl={3}>
          <a className="fc-white fs-secondary">Pagos virtuales</a>
        </Col>
        <Col sm={12} md={12} lg={{ span: 12, offset: 1 }} xl={{ span: 12 }}>
          <Menu mode="horizontal" className="bg-primary-color lineHeight">
            <Item key="1">
              <a
                href="https://psedian.pse.com.co/PSEHostingUI/DIANTicketOffice.aspx?Banco=1051"
                target="_blank"
                className="fc-white"
              >
                Impuestos
              </a>
            </Item>
            <Item key="2">
              <a
                href="https://servicio.nuevosoi.com.co/soi/index.do?codigoBanco=51"
                target="_blank"
                className="fc-white"
              >
                Seguridad social
              </a>
            </Item>
            <Item key="3">
              <a
                href="https://www.zonapagos.com/ws_cartera_davivienda/index.aspx"
                target="_blank"
                className="fc-white"
              >
                Productos Davivienda
              </a>
            </Item>
            <Item key="4">
              <a href="#" className="fc-white">
                Volver
              </a>
            </Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default NavBar
