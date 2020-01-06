import React from 'react'
import {
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCard
} from 'mdbreact'
import dreamImg from './assets/dreamCatchSnip.PNG'
import SCImg from './assets/SCimg.PNG'
import ScrollAnimation from 'react-animate-on-scroll'
import './Projects.scss'

const Projects = () => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h2
          className="display-4"
          style={{
            fontSize: '5rem',
            width: '85vw',
            margin: 0
          }}
        >
          Projects
        </h2>
        <h5 className="expl">*click image to link to the githubs*</h5>
      </header>
      <div className="containerz">
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: '4rem'
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
                    color: 'white'
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
                    style={{ height: '35vh', width: '45vw' }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem'
                  }}
                >
                  This was my first project, it was meant to help people connect
                  with schools and jobs that reflected their interests so they
                  could "live the dream".
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
                    color: 'white'
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
                    style={{ height: '35vh', width: '40vw' }}
                  />
                </a>
                <MDBCardBody
                  style={{
                    margin: '.5rem',
                    border: 'black double .2rem',
                    padding: '.23rem'
                  }}
                >
                  A social media platform made by coders for coders *hosting in
                  progress*
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
        </section>
      </div>
    </>
  )
}

export default Projects
