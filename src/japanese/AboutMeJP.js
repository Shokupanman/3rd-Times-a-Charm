import React from 'react'
import { MDBJumbotron, MDBContainer } from 'mdbreact'
import './AboutMeJP.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const github = <FontAwesomeIcon icon={faGithubSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const at = <FontAwesomeIcon icon={faAt} />

const AboutMeJP = () => {
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
            私について
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
            アピールポイントはパソコンの言語については理解しています。日本語も話すことができます。人と話すことがとても好きで人の心を読むことが特技です。私の趣味はゲームです。小さな頃からどのようにしてゲームをプログラムしているのかとても興味を持ちました。そして自分のゲームやプログラムを作りたいと思うようになりました。デブマウンテンに入り、プログラミングを学び、自分の作りたいものを作れば作るほど自信になりました。パソコンのプログラムは複雑ですが、達成するために努力をすれば結果はついてきますので、努力して働きたいと考えています。　
          </p>
        </MDBContainer>
      </MDBJumbotron>
    </div>
  )
}

export default AboutMeJP
