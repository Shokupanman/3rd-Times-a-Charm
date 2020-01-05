import React from 'react'
import { MDBJumbotron, MDBContainer, MDBIcon } from 'mdbreact'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div>
      <MDBJumbotron
        fluid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MDBContainer>
          <h2 className="display-4" style={{ fontSize: '5rem' }}>
            About Me
            <hr />
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/harrison-hancock"
          >
            <MDBIcon
              fab
              icon="linkedin"
              style={{ color: 'black', fontSize: '1.6rem' }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Shokupanman"
          >
            <MDBIcon
              fab
              icon="github"
              style={{ margin: '3rem', color: 'black', fontSize: '1.6rem' }}
            />
          </a>
          <p style={{ maxWidth: '45vw', fontSize: '1.7rem' }}>
            I am a young and excited Full Stack Developer looking to soak up as
            much as I can New experiences are always a big drive for me. I had
            two years of voulenteer service in Japan and did Japanese
            Translation afterwards in Hawaii. I have a passion for coding
            because it is an ever growing, ever learning enviroment that harbors
            true innovation As a Developer I am finally 'Living the Dream'!
          </p>
        </MDBContainer>
      </MDBJumbotron>
    </div>
  )
}

export default AboutMe
