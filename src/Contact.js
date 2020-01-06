import React from 'react'
import './Contact.scss'
import { MDBAnimation, MDBRow } from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll'
import pic from './assets/contactBackground.jpg'

const Contact = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeInLeft" delay="3s">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh'
          }}
        >
          <section>
            <img src={pic} alt="" className="bg" />
            <MDBRow style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>C</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>O</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>N</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".4s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>T</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".5s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>A</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".6s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>C</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".7s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>T</h1>
                </MDBAnimation>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: '2rem'
                }}
              >
                <MDBAnimation type="flipInY" duration="1s" delay=".9s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>M</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>E</h1>
                </MDBAnimation>
              </div>
            </MDBRow>
          </section>
          <section>
            <footer className="footer">
              <MDBAnimation type="slideInUp" delay=".2s">
                <h1 className="footerbit">Bilingual</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInLeft" delay=".5s">
                <h1 className="footerbit">Web</h1>
              </MDBAnimation>
              <MDBAnimation type="slideInDown" delay="1s">
                <h1 className="footerbit">Developer</h1>
              </MDBAnimation>
            </footer>
          </section>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Contact
