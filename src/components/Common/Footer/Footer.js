import React from 'react'
import { Row, Col } from 'antd'
import vigilado from '../../../assets/img/vigilado.png'

const Footer = () => {
  return (
    <div className="bg-footer">
      <Row type="flex" align="middle">
        <Col sm={24} md={5} offset={1}>
          <img src={vigilado} alt="vigilado" className="w-100" />
        </Col>
        <Col sm={24} md={10}>
          <h6 className="fc-white bold">
            Banco Davivienda S.A. todos los derechos reservados 2020
          </h6>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
