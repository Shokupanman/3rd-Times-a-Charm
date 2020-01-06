import React from 'react'
import './App.scss'
import img from './assets/backgroundImage.jpg'
import { MDBAnimation, MDBRow } from 'mdbreact'
import AboutMe from './AboutMe'
import Projects from './Projects'
import MyLanguages from './MyLanguages'
import ScrollAnimation from 'react-animate-on-scroll'

const App = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh'
          }}
        >
          <section>
            <img src={img} alt="" className="bg" />
            <MDBRow style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>H</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>A</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>R</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".4s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>R</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".5s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>I</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".6s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>S</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".7s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>O</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay=".8s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>N</h1>
                </MDBAnimation>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  margin: '2rem'
                }}
              >
                <MDBAnimation type="flipInY" duration="1s" delay=".9s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>H</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>A</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1.1s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>N</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1.2s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>C</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1.3s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>O</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1.4s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>C</h1>
                </MDBAnimation>
                <MDBAnimation type="flipInY" duration="1s" delay="1.5s">
                  <h1 style={{ margin: '0', fontSize: '7rem' }}>K</h1>
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
      <ScrollAnimation animateIn="fadeInLeft" delay="3s">
        <AboutMe />
      </ScrollAnimation>
      <MyLanguages />
      <Projects />
    </div>
  )
}

export default App
