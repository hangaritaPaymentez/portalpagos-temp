import React from 'react'
import { Row, Col } from 'antd'
import vigilado from '../../Assets/img/vigilado.png'

import './styles.css'

const Footer = () => {
  return (
    <div className="footer__container">
      <Row type="flex" align="middle">
        <Col sm={24} md={5} className="footer__img">
          <div>
            <img src={vigilado} alt="vigilado" />
          </div>
        </Col>
        <Col sm={24} md={10} className="footer__text">
          <h6>Banco Davivienda S.A. todos los derechos reservados 2020</h6>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
