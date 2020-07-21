import React, { useState } from 'react'
import './App.scss'
import img from './assets/bckImg.jpg'
import { MDBAnimation, MDBRow, MDBBtn } from 'mdbreact'
import AboutMe from './english/AboutMe'
import AboutMeJP from './japanese/AboutMeJP'
import Projects from './english/Projects'
import ProjectsJP from './japanese/ProjectsJP'
import MyLanguages from './english/MyLanguages'
import MyLanguagesJP from './japanese/MyLanguagesJP'
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

  const WebD = () => {
    if (japanese) {
      return <h1 className="footerbit">ウエブ</h1>
    } else if (english) {
      return <h1 className="footerbit">Web</h1>
    }
  }

  const DevP = () => {
    if (japanese) {
      return (
        <h1 className="footerbit" style={{ marginLeft: '-2vw' }}>
          　開発者
        </h1>
      )
    } else if (english) {
      return <h1 className="footerbit">Developer</h1>
    }
  }

  const MyLS = () => {
    if (japanese) {
      return <MyLanguagesJP />
    } else if (english) {
      return <MyLanguages />
    }
  }
  const AbtMS = () => {
    if (japanese) {
      return <AboutMeJP />
    } else if (english) {
      return <AboutMe />
    }
  }
  const PrjctS = () => {
    if (japanese) {
      return <ProjectsJP />
    } else if (english) {
      return <Projects />
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
          <section style={{ marginLeft: '2vw' }}>
            <img src={img} alt="" className="bg" />
            <section>
              <h3 style={{ color: 'white' }}>日本語</h3>
              <MDBBtn
                className="JpnBtn"
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
                className="EngBtn"
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
            </section>

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
                <WebD />
              </MDBAnimation>
              <MDBAnimation type="slideInDown" delay="1s">
                <DevP />
              </MDBAnimation>
            </footer>
          </section>
        </div>
      </ScrollAnimation>
      <footer className="mq">
        <ScrollAnimation animateIn="fadeInLeft" delay="3s">
          <AbtMS />
        </ScrollAnimation>
        <MyLS />
        <PrjctS />
      </footer>
    </div>
  )
}

export default App
