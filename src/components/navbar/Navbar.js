import React from 'react'
import styled from "styled-components"
import Group from "../../assets/img/Group.png"
import zvezda from "../../assets/img/zvezda.png"
export default function Navbar() {
  return (
    <StyledNavbar>
        <div>
        <img src={Group} alt=""  className='img'/>
        <img src={zvezda} alt="" className='img zvezda'/>   
        </div>
    </StyledNavbar>
  )
}
const StyledNavbar = styled.div`
    div{
        margin: 60px 0px 40px 0px;
        display: flex;
        align-items: center;
        position: relative;
    }
`