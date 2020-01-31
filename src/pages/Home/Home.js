import React from 'react'
import { Row, Col, Card } from 'antd'
import Searchbar from 'components/Common/Searchbar/Searchbar'
import CardItem from './CardItem/CardItem'
import travels from '../../assets/img/01.png'
import sports from '../../assets/img/02.png'
import schools from '../../assets/img/03.png'
import dealership from '../../assets/img/04.png'
import residency from '../../assets/img/05.png'
import commission from '../../assets/img/06.png'
import hotels from '../../assets/img/07.png'
import notaries from '../../assets/img/08.png'
import industries from '../../assets/img/09.png'
import medicine from '../../assets/img/10.png'
import publicService from '../../assets/img/11.png'
import otherComercies from '../../assets/img/12.png'

const Home = () => {
  return (
    <div>
      <div className="home__img">
        <Row>
          <Col sm={12} md={20} lg={{span: 10, offset: 3}} xl={{span: 10, offset: 3}}>
            <h2 className="fc-white fs-title bold home__title">
              Busca el comercio en donde quieras hacer un pago
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Searchbar />
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3 className="fc-gray fs-title bold">Has buscado antes</h3>
          </Col>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Card>hola card</Card>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3 className="fc-gray fs-title bold">Categorías de comercios</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={21} xl={21} offset={3}>
            <CardItem title="Agencia de viajes" img={travels} />
            <CardItem title="Club social y Deportivo" img={sports} />
            <CardItem title="Colegios e instituciones educativas" img={schools} />
            <CardItem title="Concesionarios" img={dealership} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={21} xl={21} offset={3}>
            <CardItem title="Conjuntos residenciales" img={residency} />
            <CardItem title="Fiduciarias y comisionistas" img={commission} />
            <CardItem title="Hoteles e inmobiliarias" img={hotels} />
            <CardItem title="Impuestos, servicios, notarías" img={notaries} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={21} xl={21} offset={3}>
            <CardItem title="Industrias y constructoras" img={industries} />
            <CardItem title="Salud y medicina prepagada" img={medicine} />
            <CardItem title="Servicios públicos" img={publicService} />
            <CardItem title="Otros comercios..." img={otherComercies} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home
