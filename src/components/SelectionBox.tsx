import styled from "styled-components";

  const OuterBox = styled.div`
    display: flex;
    width: 100%;
    background: #A5A4EA;
    height: 100vh;
    
  `;

  const SelectionContainer = styled.div`   
    border: 2px solid #3F3D56;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 45%;
    width:45%;
    height: 30em; 
    padding-bottom: 2em;
    background: #3F3D56;
    border-radius: 1.2em;
      
  `;

  const SelectionHeading = styled.div`   
    width:100%;
    border: 1px solid #3F3D56;
    padding-top: 2em;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 2em;
    border-radius: 1.2em;
  `;


  const PreviewContainer = styled.div`
    position: absolute;
    border: 2px solid #3F3D56;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-right: 2em;
    margin-left: 51%;
    width:45%;
    height: 30em; 
    padding-bottom: 2em;
    background: #3F3D56;
    border-radius: 1.2em;
  `;

  const SelectionButton = styled.div`
    width: 10em;
    height: 3.5em;
    background: #A5A4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.5em;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    display: flex;
    font-family: Trebuchet MS;
    color: #FFFFFF;
    font-family: Arial;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.05em;
    text-align: center;

  `;

  const SelectionOption = styled.div`
    font-family: Trebuchet MS;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    padding: 2em;
    text-transform: uppercase;

  `;

  const SelectionContent = styled.div`
    flex-direction: column;
    justify-items: center;
    display: flex;
    max-height: 21.5em; 
    overflow: scroll;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

  `;

  const ImgIllustration1 = styled.img.attrs({
    alt: "Image Placeholder",
  })
    `
    position:absolute;
    margin-top: 33%;
    max-height: 25%;
    margin-left: 2em;
    
    `
  ;

  const ImgIllustration2 = styled.img.attrs({
    alt: "Image Placeholder",
  })
    `
    position:absolute;
    margin-top: 33%;
    max-height: 25%;   
    margin-left: 83%;
    margin-right: 2em;

    `
  ;

  const GifIllustration = styled.img.attrs({
    alt: "Image Placeholder",
  })
    `
    border: 3px solid #3F3D56;
    border-radius: 1.2em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 45%;
    
    `
  ;

export {OuterBox, SelectionContainer, SelectionHeading,SelectionContent, PreviewContainer, SelectionButton, SelectionOption, ImgIllustration1, ImgIllustration2, GifIllustration};
  