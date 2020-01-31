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

// import './styles.less'

const Home = () => {
  return (
    <div className="container-content">
      <div className="home container-content">
        <Row>
          <Col sm={12} md={24} lg={24} xl={24}>
            <h3>Busca el comercio en donde quieras hacer un pago</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Searchbar />
          </Col>
        </Row>
      </div>
      <div className="home__cards">
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3>Has buscado antes</h3>
          </Col>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <Card>hola card</Card>
          </Col>
        </Row>
      </div>
      <div className="home__cards">
        <Row>
          <Col sm={12} md={12} lg={10} xl={12} offset={3}>
            <h3>Categorías de comercios</h3>
          </Col>
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Agencia de viajes" img={travels} />
          <CardItem title="Club social y Deportivo" img={sports} />
          <CardItem title="Colegios e instituciones educativas" img={schools} />
          <CardItem title="Concesionarios" img={dealership} />
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Conjuntos residenciales" img={residency} />
          <CardItem title="Fiduciarias y comisionistas" img={commission} />
          <CardItem title="Hoteles e inmobiliarias" img={hotels} />
          <CardItem title="Impuestos, servicios, notarías" img={notaries} />
        </Row>
        <Row className="home__cards-padding">
          <CardItem title="Industrias y constructoras" img={industries} />
          <CardItem title="Salud y medicina prepagada" img={medicine} />
          <CardItem title="Servicios públicos" img={publicService} />
          <CardItem title="Otros comercios..." img={otherComercies} />
        </Row>
      </div>
    </div>
  )
}

export default Home
