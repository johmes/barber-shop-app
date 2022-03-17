import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }


  body {
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  a {
    font-size: ${({ theme }) => theme.smallTextFont};
    text-decoration: none;
    letter-spacing: .05rem;
    color: ${({ theme }) => theme.colorSecondary};
  }

  a:hover {
    transition: all .3s linear;
    color: ${({ theme }) => theme.primaryHover};
  }

  .Header-highlight {
    color: ${({ theme }) => theme.colorSecondary};
  }

  .Greeting-text {
    margin: 0;
    font-size: ${({ theme }) => theme.mediumTextFont};
  }

  .Slogan-text {
    font-style: italic;
    color: ${({ theme }) => theme.colorAccent};
    font-size: ${({ theme }) => theme.smallTextFont};
  }

  .StepHeader {
    text-align: left;
    font: normal normal 600 32px/43px Segoe UI Variable Text;
    letter-spacing: 1.92px;
    color: #17181D;
  }

  .FormGroup {
    width: 548px;
  }

  .InputBox {
    width: 548px;
    height: 63px;
    padding: 16px 20px;
    text-align: left;
    font: normal normal 400 22px/30px Segoe UI Variable Text;
    letter-spacing: 1.32px;
    color: #919191;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 8px;
    margin-bottom: 25px;
  }

  .CheckboxText {
    width: 483px;
    text-align: left;
    font: normal normal 400 22px/30px Segoe UI Variable Text;
    letter-spacing: 1.32px;
    color: #919191;
    margin-left: 1rem;
  }
  .FormContainer {
    width: 600px;
  }

  .FormContainer input[type=checkbox] {
    width: 30px;
    height: 30px;
  }
  
  .FormContainer input[type=radio] {
    position: absolute;
    top: 65px;
    right: 40px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .Bottom-shadow {
    width: 100%;
    height: 7rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: transparent;
    -moz-box-shadow: inset 0 5px 5px ${({ theme }) => theme.primaryDark});
    -webkit-box-shadow: inset 0 5px 5px ${({ theme }) => theme.primaryDark};
    box-shadow: inset 0rem -6rem 3rem -3em ${({ theme }) => theme.primaryDark};
    z-index: 9;
  }

  small {
    display: block;
  }

  form {
    margin: 0 auto;
  }

  .StepLine {
    width: 1px;
    height: 285px;
    background: #919191 0% 0% no-repeat padding-box;
    border: 1px solid #919191;
    border-radius: 1px;
    margin: 1rem 0;
  }
  .SubmitButtonContainer {
    width: 100%;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem;
    letter-spacing: .05em;
  }

  .form-control {
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 8px;
    margin: 1.2rem 0 0 0;
  }

  .BookingList {
    width: 600px;
    height: auto;
    // overflow-x: scroll;
    // -ms-overflow-style: none;  /* IE and Edge */
    // scrollbar-width: none;  /* Firefox */
  }

  

  .BookingList::-webkit-scrollbar {
    display: none;
  }

  .BookingListItem {
    position: relative;
    width: 600px;
    height: 151px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 8px;
    padding: 36px 40px;
    margin-bottom: 20px;
    cursor: pointer;
    
  }

  .BookingListItemMarker {
    position: absolute;
    top: 65px;
    right: 40px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    padding: 5px;
    border: 2px solid #707070;
  }

  .BookingListItemMarker span {
    position: inherit;
    right: 3px;
    top: 3px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #4594E0 0% 0% no-repeat padding-box;
  }

  .BookingListItemHeader {
    float: left;
    text-align: left;
    font: normal normal 600 32px/43px Segoe UI Variable Text;
    letter-spacing: 1.92px;
    color: #292C35;
    margin-bottom: 1px;
  }
  .BookingListItemDescription {
    float: left;
    text-align: left;
    font: normal normal 400 22px/30px Segoe UI Variable Text;
    letter-spacing: 1.32px;
    color: #292C35;
  }

  textarea {
    resize: none;
  }

  .Max-lenght {
    text-align: right;
    margin-top: .2rem;
    font-size: ${({ theme }) => theme.smallTextFont};
    color: ${({ theme }) => theme.textColorTertiary};
  }

  .Submit-status {
    color: ${({ theme }) => theme.textColorPrimary};
  }

  .Submit-status.Success {
    color: green;
  }

  .Submit-status.Failed {
    color: ${({ theme }) => theme.colorWarning};
  }

  .Content-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .Content-area.dark {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  .Content-area.light {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  .LandingPageImage {
    width: 100%;
    border-radius: 0 0 0 28px;
    -moz-box-shadow: 0 1px 36px -24px ${({ theme }) => theme.secondaryDark});
    -webkit-box-shadow: 0 1px 36px -24px ${({ theme }) => theme.secondaryDark};
    box-shadow: 0rem 1rem 3rem -1.5rem ${({ theme }) => theme.secondaryDark};
    height: auto;
  }


  .Inner.Left {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 10rem;
    width: 50%;
  }

  .Inner.Right {
    width: 50%;
    float: left;
    height: 100vh;
  }

  .Content-area .Inner p {
    font-size: ${({ theme }) => theme.mediumTextFont};
    color: ${({ theme }) => theme.textColorSecondary};
    width: 22rem;
  }

  .Content-area .Inner ul {
    margin: 0 auto;
    width: 50vh;
    list-style-position: outside;
    list-style-type: "🔹";
  }

  .Content-area .Inner li {
    margin: 1.2rem auto;
    list-decoration
  }

  .Content-area.landing-area {
    margin-top: 3.75rem;
    min-height: calc(100vh - 3.75rem);
    background-color: ${({ theme }) => theme.primaryDark};
  }

  .ButtonContainer {
    margin: 2rem 0;
    width: auto;
  }

  .Content-area h1, h2, h3 {
    margin-top: .3rem;
    margin-bottom: 1.5rem;
    font-weight: ${({ theme }) => theme.fontThick};
  }

  .Content-area p {
    color: ${({ theme }) => theme.textColorSecondary};
  }

  .Content-area h1 {
    font-size: ${({ theme }) => theme.headerTextFont};
  }

  .Content-area h2 {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.headerTextFont};
  }

  .Content-area h3 {
    font-size: ${({ theme }) => theme.mediumTextFont};
  }

  .Emoji-header-icon {
    font-size: ${({ theme }) => theme.largeTextFont};
  }

  #about h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.mediumTextFont};
  }
  
  .Content-table {
    width: 100%;
    text-align: center;
    margin: 1.2rem auto;
    display: display-block;
  }

  .Content-table td {
    width: 33.3%;
    font-weight: ${({ theme }) => theme.fontThick};
    color: ${({ theme }) => theme.textColorPrimary};
    padding: 0.6rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }

  .Content-table tr {
    margin-bottom: 1.2rem;
  }

  #skills h3 {
    margin-top: 1.6rem;
    margin-bottom: 0;
    font-weight: ${({ theme }) => theme.fontThick};
    font-size: ${({ theme }) => theme.mediumTextFont};
    color: ${({ theme }) => theme.colorPrimary};
  }

  .Content-sneakpeek {
    position: relative;
    top: 4rem;
  }

  .Content-sneakpeek p {
    font-weight: ${({ theme }) => theme.fontThin};
    color: ${({ theme }) => theme.textColorSecondary};
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {

    .LandingPageImage {
      border-radius: 0px;
    }

    .Inner.Left {
      width: 100%;
    }

    .Inner.Right {
      margin: 1rem 0;
      padding: 0;
      width: 100%;
      filter: brightness(80%);
    }

  
    .Content-area .Inner p {
      width: 28rem;
    }

    .Content-area .Inner ul {
      width: 100%;
    }

    .Content-area.landing-area {
      margin-top: 3rem;
    }
    
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {

    .Content-sneakpeek {
      top: 1.5rem;
    }

    .Content-area .Inner p {
      margin: 0 auto;
      width: 100%;
      text-align: center;
    }

    .Content-area {
      width: 100%;
      text-align: center;
    }

    .Content-area h1, h2, h3 {
      font-size: ${({ theme }) => theme.largeTextFont};
    }

  }

`