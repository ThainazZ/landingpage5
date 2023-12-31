import { createGlobalStyle } from "styled-components";

//define o estilo global da tela

const globalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    flex: 1;
}

body {
   
    background-color: #F8FDFF;
    font-family: 'Poppins', sans-serif;
}

button {
    background-color: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;
}

a {
    text-decoration: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
}


`

export default globalStyle;