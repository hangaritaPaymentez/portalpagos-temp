import React from 'react'
import { Col } from 'antd'

const CardItem = props => {
  const { img, title } = props
  return (
    <Col sm={12} md={12} lg={5} xl={5} className="home__cardItem">
      <a href="#" className="cardItem__link">
        <div className="cardItem__container">
          <div className="cardItem__img">
            <img src={img} alt="icon category" className="w-100" />
          </div>
          <p className="cardItem__title">{title}</p>
        </div>
      </a>
    </Col>
  )
}

export default CardItem
