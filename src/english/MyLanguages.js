import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
} from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
import './MyLanguages.scss'

const MyLanguages = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <header
        sytle={{
          width: '100vw',
          backgroundColor: 'black',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            margin: 0,
          }}
        >
          My Technologies
        </h1>
      </header>
      <hr />
      <section
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'black' }}
      >
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="3s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://miro.medium.com/max/4725/1*6ahbWjp_g9hqhaTDSJOL1Q.png"
                waves
                style={{ maxHeight: '30vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  JavaScript
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".3s" delay="4s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://engineering.fb.com/wp-content/uploads/2016/02/gev5wqc6bdmxibegag-eayeaaaaabj0jaaab.jpg"
                waves
                style={{ maxHeight: '30vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  React
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".4s" delay="5s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://forgeahead.io/wp-content/uploads/2015/01/logo-HTML-CSS.jpg"
                waves
                style={{ maxHeight: '30vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  CSS & Html
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".5s" delay="6s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/logo/mdb-transparent-big.png"
                waves
                style={{ maxHeight: '30vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  BootStrap and Material Design
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".7s" delay="7s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="http://johndhammcodes.com/img/techIcons/greensock.png"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  Green Sock
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://lucasvidelaine.files.wordpress.com/2018/10/postgresql2.png?w=600"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  PostGres SQL
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://cdn.jim-nielsen.com/ios/512/google-maps-2014-11-12.png"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  Google Maps API
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  Node
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/30349/preview_image/ReduxLogo.jpg"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  Redux
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://lh3.googleusercontent.com/proxy/Svx_MB5Cp-OGH91-f-IIj92ZDO-gH2WDnGhj64aiz0fb4EKvKUEfNFtCokzCCVSebbsknrUKOAPDwFhtcbbpRxEVgF4GYcmZCvTEUNlQKQ"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  C#
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration=".2s" delay="8s">
          <MDBCol>
            <MDBCard
              style={{
                width: '22rem',
                backgroundColor: 'black',
                marginLeft: '1rem',
              }}
            >
              <MDBCardImage
                className="img-fluid"
                src="https://188qm22wef3q4c2s7q1bp2wu-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/react-native-mobile-app-development-agency.png"
                waves
                style={{ maxHeight: '35vh', width: '22rem' }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    paddingBottom: '1rem',
                    backgroundColor: 'black',
                    color: 'white',
                  }}
                >
                  React Native
                </MDBCardTitle>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </ScrollAnimation>
      </section>
    </div>
  )
}
export default MyLanguages
