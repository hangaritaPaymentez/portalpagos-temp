import React from 'react'
import { Col, Card } from 'antd'
// import './styles.less'

const CardItem = props => {
  const { img, title } = props
  return (
    <Col sm={12} md={12} lg={5} xl={5} className="cardItem">
      <a href="#">
        <Card hoverable className="cardItem__img">
          <div>
            <img src={img} alt="icon category" className="w-100" />
          </div>
          <p>{title}</p>
        </Card>
      </a>
    </Col>
  )
}

export default CardItem
