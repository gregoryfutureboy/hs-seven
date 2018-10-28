import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family:"AvenirNext-Medium";
    src:url("../../assets/Fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix");
    src:url("../../assets/Fonts/1a7c9181-cd24-4943-a9d9-d033189524e0.eot?#iefix") format("eot"),url("../../assets/Fonts/627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2") format("woff2"),url("../../assets/Fonts/f26faddb-86cc-4477-a253-1e1287684336.woff") format("woff"),url("../../assets/Fonts/63a74598-733c-4d0c-bd91-b01bffcd6e69.ttf") format("truetype");
  }

  @font-face{
    font-family:"AvenirNext-Bold";
    src:url("../../assets/Fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix");
    src:url("../../assets/Fonts/dccb10af-07a2-404c-bfc7-7750e2716bc1.eot?#iefix") format("eot"),url("../../assets/Fonts/14c73713-e4df-4dba-933b-057feeac8dd1.woff2") format("woff2"),url("../../assets/Fonts/b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f.woff") format("woff"),url("../../assets/Fonts/890bd988-5306-43ff-bd4b-922bc5ebdeb4.ttf") format("truetype");
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
    margin-bottom: 2rem;
    font-family: 'futura';
    color: ${props => props.theme.black};
  }

  h3 {
    margin: 0;
    font-family: 'AvenirNext-Medium';
    color: ${props => props.theme.black};
    font-weight: normal;
  }

  a {
    font-family: 'AvenirNext-Medium';
    text-decoration: none;
    color: ${props => props.theme.black};
  }

  @media (min-width: 1101px) {
    h1 {
      font-size: 5rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 414px) {
    h1 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }
  }    

  @media (max-width: 375px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1rem;
    }
  }
`