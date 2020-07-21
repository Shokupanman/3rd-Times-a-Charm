import React from 'react'
import {
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCard,
} from 'mdbreact'
import dreamImg from '../assets/dreamCatchSnip.PNG'
import SCImg from '../assets/SCimg.PNG'
import KisoImg from '../assets/kiso.png'
import Unity from '../assets/Unity.webp'
import Gmz from '../assets/games.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import './Projects.scss'

const Projects = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <h2
          className="display-4"
          style={{
            fontSize: '5rem',
            width: '85vw',
            margin: 0,
            color: 'white',
          }}
        >
          Projects
        </h2>
      </header>
      <div className="containerz">
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            margin: '4rem',
            backgroundColor: 'black',
            flexWrap: 'wrap',
          }}
        >
          <ScrollAnimation animateIn="fadeInLeft">
            <MDBCol>
              <MDBCard className="mdbCard">
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.4rem',
                    backgroundColor: 'black',
                    height: '8vh',
                    margin: 0,
                    color: 'white',
                  }}
                >
                  Dream Catcher
                </MDBCardTitle>
                <a
                  href="https://github.com/Shokupanman/Personal_proj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBCardImage
                    id="projImg"
                    className="img-fluid"
                    src={dreamImg}
                    waves
                    style={{
                      height: '30vh',
                      width: '35vw',
                    }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem',
                    color: 'white',
                    maxWidth: '35vw',
                  }}
                >
                  A website designed to assist those looking to find their dream
                  career by comparing schools and careers for the user,
                  developed in React using massive, express, js,
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay=".5s">
            <MDBCol>
              <MDBCard className="mdbCard">
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.4rem',
                    backgroundColor: 'black',
                    height: '8vh',
                    margin: 0,
                    color: 'white',
                  }}
                >
                  Social Coders
                </MDBCardTitle>
                <a
                  href="https://github.com/lazyCoders1/social-coders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBCardImage
                    id="projImg"
                    className="img-fluid"
                    src={SCImg}
                    waves
                    style={{ height: '30vh', width: '35vw' }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem',
                    color: 'white',
                    maxWidth: '35vw',
                  }}
                >
                  A social media platform made to target coders and help people
                  study and learn from mentors, developed in React using
                  express, redux, js, material UI Bootstrap and various API’s
                  including google API
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft">
            <MDBCol>
              <MDBCard className="mdbCard">
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.4rem',
                    backgroundColor: 'black',
                    height: '8vh',
                    margin: 0,
                    color: 'white',
                  }}
                >
                  A variety of games
                </MDBCardTitle>
                <a
                  href="https://github.com/Shokupanman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBCardImage
                    id="projImg"
                    className="img-fluid"
                    src={Gmz}
                    waves
                    style={{
                      height: '30vh',
                      width: '15vw',
                      marginLeft: '12vw',
                    }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem',
                    color: 'white',
                    maxWidth: '35vw',
                  }}
                >
                  A variety of games made in React or Vanilla JavaScript, from
                  the very basic functionality of Snake to more creative game
                  logic of Othello.
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay=".5s">
            <MDBCol>
              <MDBCard className="mdbCard">
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.4rem',
                    backgroundColor: 'black',
                    height: '8vh',
                    margin: 0,
                    color: 'white',
                  }}
                >
                  Kiso (in development)
                </MDBCardTitle>
                <a
                  href="https://github.com/Shokupanman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBCardImage
                    id="projImg"
                    className="img-fluid"
                    src={KisoImg}
                    waves
                    style={{
                      height: '30vh',
                      width: '15vw',
                      marginLeft: '12vw',
                    }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem',
                    color: 'white',
                    maxWidth: '35vw',
                  }}
                >
                  A phone application designed to teach the Basics of Japanese
                  to new learners, utilizing React Native, React Native Paper,
                  and built in Expo.
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay=".5s">
            <MDBCol>
              <MDBCard className="mdbCard">
                <MDBCardTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.4rem',
                    backgroundColor: 'black',
                    height: '8vh',
                    margin: 0,
                    color: 'white',
                  }}
                >
                  Unity Project (in development)
                </MDBCardTitle>
                <a
                  href="https://github.com/Shokupanman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MDBCardImage
                    id="projImg"
                    className="img-fluid"
                    src={Unity}
                    waves
                    style={{
                      height: '30vh',
                      width: '35vw',
                    }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem',
                    color: 'white',
                    maxWidth: '35vw',
                  }}
                >
                  A new project to do some personal application and study of the
                  C# language. A 100% indie project, from 3D design to game
                  logic
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  )
}

export default Projects
