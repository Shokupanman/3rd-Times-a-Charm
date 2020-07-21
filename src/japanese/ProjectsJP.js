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
import './ProjectsJP.scss'

const ProjectsJP = () => {
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
          プロジェクト
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
                  ドリーム　キャッチャー
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
                  ReactのフレームワークでJavaScriptやExpressを使ってみんなが自分の夢を追いかけれるように色んな大学や会社を比べて、一番いい人生のプランをするためのサイトです
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
                  ソーシャルコーダーズ
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
                  React, Google API, Express, とMDB Bootstrap
                  を使いゼロから開発者のためのソーシャルメディアを開発者
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
                  色んなゲームなど
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
                  Vanilla
                  JavaScriptやReactを使い色んなゲームの開発を行いました。（スネーク、オセロ、など）
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
                  基礎 (開発中)
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
                      MaxWidth: '15vw',
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
                  React
                  Nativeを使い日本語を学びたい方に日本語の基礎的な文法や単語を教えるアプリ
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
                  ユニティー のプロジェクト(開発中)
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
                      maxWidth: '35vw',
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
                  C#のゲームの基本設計、詳細設計、開発
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </ScrollAnimation>
        </section>
      </div>
    </div>
  )
}

export default ProjectsJP
