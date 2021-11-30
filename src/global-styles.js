import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./constants/theme";

export const GlobalStyles = createGlobalStyle`html, body {
    user-select: none;
    overscroll-behavior: none;
    font-family: "Josefin Sans", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding:0;
    box-sizing: border-box;


    .container{
        width: 1560px;
        min-width: 1560px;
        margin: 0 auto;
        height: 100%;
        @media(max-width: 1560px){
            width: 1280px;
            min-width: 1280px;
        }
        @media(max-width: ${breakpoints.desktop}){
            width: 1080px;
            min-width: 1080px;
        }
        @media(max-width: 1050px){
            width: 100%;
            min-width: 100%;
        }  
        .row {
            display: flex;
            height: 100%;
            padding: 0 32px;
            @media(${breakpoints.phone}) {
                padding: 0 16px;
            }
        }
    }

  
    .v-center {
        align-items: center;
    }
    .space-between {
        justify-content: space-between;
    }

    .container-fluid {
        width: 100%;
        height: 100%;
        .row {
            display: flex;
            height: 100%;
        }
    }

}`;
