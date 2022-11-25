import {createGlobalStyle} from "styled-components"
import "./styleimg.css"
const  StyledGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container{
        border: 1px solid red;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
      }
      
`
export default StyledGlobal;