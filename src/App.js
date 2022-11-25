import React from "react";
import StyledGlobal from "./assets/style/StyleGlobal";
import Navbar from "./components/navbar/Navbar";
import ayfon from "./assets/img/ayfon.png";
import styled from "styled-components";
export default function App() {
  return (
    <Styled>
      <div className="container">
        <StyledGlobal />
        <Navbar />
        <section>
          <div>
            <h1>Biz bilan har lahza —unumli</h1>
            <p>
              Tingla ilovasi orqali nodir asarlarning audio shaklida
              tinlashingiz va elektron tarzda mutolaa qilishingiz mumkin.
            </p>
            <div className="orqafon"></div>
          </div>
          <div className="img-wrapp">
            <img src={ayfon} alt="" />
          </div>
        </section>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    div {
      max-width: 650px;
      position: relative;

      h1 {
        font-family: SF Pro Display;
        font-size: 80px;
        font-weight: 700;
        line-height: 95px;
        letter-spacing: -0.02em;
        text-align: left;
        margin-bottom: 24px;
        color:black;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 36px;
        color: #000;
      }

      .orqafon {
        width: 388px;
        height: 388px;
        border-radius: 50%;
        background: #fcbd2c;
        /* opacity: 0.2; */
        z-index: -4;
        filter: blur(284px);
        position: absolute;
        top: 0px;
        left: 0px;
      }

      &.img-wrapp {
        max-width: 514px;
        max-height: 729px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
