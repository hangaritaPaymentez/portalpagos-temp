import React from 'react'
import { Col, Card } from 'antd'
import './styles.less'

const CardItem = props => {
  const { img, title } = props
  return (
    <Col sm={12} md={12} lg={5} xl={5} className="cardItem">
      <a href="#">
        <Card hoverable>
          <div className="cardItem__image">
            <img src={img} alt="icon category" />
          </div>
          <p>{title}</p>
        </Card>
      </a>
    </Col>
  )
}

export default CardItem
