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
    <div className="abCont">
      <MDBJumbotron
        fluid
        className="abMeJum"
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <MDBContainer>
          <h2
            className="display-4"
            style={{ fontSize: '5rem', color: 'white' }}
          >
            About Me
            <hr />
          </h2>
          <div>
            <h3 className="gmail" style={{ color: 'white' }}>
              {at} harrisonkhancock@gmail.com
            </h3>
            <a
              target="_blank"
              className="icon"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/harrison-hancock"
            >
              {linkedin}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              href="https://github.com/Shokupanman"
            >
              {github}
            </a>
          </div>
          <p className="abMe">
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
