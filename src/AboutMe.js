import React from 'react'
import { MDBJumbotron, MDBContainer } from 'mdbreact'
import './AboutMe.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithubSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const at = <FontAwesomeIcon icon={faAt} />

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
          <div>
            <h3>{at} harrisonkhancock@gmail.com</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/harrison-hancock"
              style={{
                fontSize: '3rem',
                color: 'black',
                textDecoration: 'none'
              }}
            >
              {linkedin}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Shokupanman"
              style={{
                fontSize: '3rem',
                color: 'black',
                textDecoration: 'none',
                marginLeft: '3rem'
              }}
            >
              {github}
            </a>
          </div>
          <p style={{ maxWidth: '45vw', fontSize: '1.7rem' }}>
            I am a young and excited Full Stack Developer looking to soak up as
            much as I can! New experiences are always a big drive for me, for
            example I had two years of voulenteer service in Japan and did
            Japanese Translation afterwards in Hawaii. I have a passion for
            coding because it is an ever growing, ever learning enviroment that
            harbors true innovation As a Developer I am finally 'Living the
            Dream'!
          </p>
        </MDBContainer>
      </MDBJumbotron>
    </div>
  )
}

export default AboutMe
