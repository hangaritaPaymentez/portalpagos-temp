/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Row, Col, Layout, Menu } from 'antd'
import logo from '../../../assets/img/dvvlogo.png'
import './styles.less'

const { Header } = Layout

const NavBar = () => {
  return (
    <div>
      <Header>
        <Row>
          <Col sm={24} md={5} offset={2}>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col sm={12} md={4}>
            <a>Pagos virtuales</a>
          </Col>
          <Col sm={12} md={12}>
            <Menu
              // theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px', background: 'red' }}
            >
              <Menu.Item key="1">
                <a
                  href="https://psedian.pse.com.co/PSEHostingUI/DIANTicketOffice.aspx?Banco=1051"
                  target="_blank"
                >
                  Impuestos
                </a>
              </Menu.Item>
              <Menu.Item key="2">
                <a
                  href="https://servicio.nuevosoi.com.co/soi/index.do?codigoBanco=51"
                  target="_blank"
                >
                  Seguridad social
                </a>
              </Menu.Item>
              <Menu.Item key="3">
                <a
                  href="https://www.zonapagos.com/ws_cartera_davivienda/index.aspx"
                  target="_blank"
                >
                  Productos Davivienda
                </a>
              </Menu.Item>
              <Menu.Item key="4">
                <a href="#">Volver</a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    </div>
  )
}

export default NavBar
