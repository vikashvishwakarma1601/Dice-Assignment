import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
    body{
        height:100vh;
        background-color:#d5bdaf;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }
    
    main {
        width:80%;
        height:90vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    p{
        margin:0;
        padding:0;
    }

`;
