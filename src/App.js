import React, { useState } from 'react'
import './App.scss'
import img from './assets/bckImg.jpg'
import { MDBAnimation, MDBRow, MDBBtn } from 'mdbreact'
import AboutMe from './english/AboutMe'
import Projects from './english/Projects'
import MyLanguages from './english/MyLanguages'
import ScrollAnimation from 'react-animate-on-scroll'

const App = () => {
  let [japanese, setJapanese] = useState(false)
  let [english, setEnglish] = useState(true)

  const jpnSwitch = () => {
    setJapanese((japanese = true))
    setEnglish((english = false))
  }

  const engSwitch = () => {
    setEnglish((english = true))
    setJapanese((japanese = false))
  }

  const MyName = () => {
    if (japanese) {
      return (
        <div className="typewriter-text" style={{ fontSize: '8vh' }}>
          ハンコック　ハリソン
        </div>
      )
    } else if (english) {
      return <div className="typewriter-text">Harrison Hancock</div>
    }
  }

  const BiL = () => {
    if (japanese) {
      return <h1 className="footerbit">　二か国語</h1>
    } else if (english) {
      return <h1 className="footerbit">Bilingual</h1>
    }
  }
  return (
    <div style={{ backgroundColor: 'black' }}>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
          }}
        >
          <section>
            <img src={img} alt="" className="bg" />
            <h3 style={{ color: 'white' }}>日本語</h3>
            <MDBBtn
              style={{
                borderRadius: '100%',
                width: '2.5vw',
                height: '5vh',
              }}
              onClick={() => jpnSwitch()}
            >
              <img
                src="https://img.freepik.com/free-vector/illustration-japan-flag_53876-27128.jpg?size=626&ext=jpg"
                alt=""
                style={{
                  maxHeight: '4rem',
                  maxWidth: '4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginLeft: '-1.3vw',
                }}
              />
            </MDBBtn>
            <h3 style={{ color: 'white' }}>English</h3>
            <MDBBtn
              style={{
                borderRadius: '100%',
                width: '2.5vw',
                height: '5vh',
              }}
              onClick={() => engSwitch()}
            >
              <img
                src="https://miro.medium.com/max/2470/0*o0-6o1W1DKmI5LbX.png"
                alt=""
                style={{
                  maxHeight: '4rem',
                  maxWidth: '4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginLeft: '-1.3vh',
                }}
              />
            </MDBBtn>

            <MDBRow
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '-3vh',
              }}
            >
              <div className="typewriter">
                <MyName />
              </div>
            </MDBRow>
          </section>
          <section>
            <footer className="footer">
              <MDBAnimation type="slideInUp" delay=".2s">
                <BiL />
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
      <footer className="mq">
        <ScrollAnimation animateIn="fadeInLeft" delay="3s">
          <AboutMe />
        </ScrollAnimation>
        <MyLanguages />
        <Projects />
      </footer>
    </div>
  )
}

export default App
