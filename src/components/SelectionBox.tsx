import styled from "styled-components";

const OuterBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  
`;

const SelectionContainer = styled.div`
    position: absolute;
    background: #A5A4EA;
    border: 3px solid #3F3D56;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 45%;
    width:45%;
    height: 550px; 
    padding-bottom: 50px;
`;

const SelectionHeading = styled.div`
    background: #3F3D56;
    width:100%;
    border: 1px solid #3F3D56;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 20px;
`;


const PreviewContainer = styled.div`
    text-align: center;
    font-family: Trebuchet MS;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #3F3D56;
    position: absolute;
    background: #A5A4EA;
    border: 3px solid #3F3D56;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 51%;
    height: 550px; 
    width:45%;
    padding-bottom: 50px;
`;

const SelectionButton = styled.div`
    width: 152px;
    height: 50px;
    background: #3F3D56;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    display: flex;
    color: #FFFFFF;
    font-family: Arial;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.05em;
    text-align: center;
`;

const SelectionOption = styled.div`
    font-family: Trebuchet MS;
    font-weight: bold;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #3F3D56;
    padding-left: 50px;
    text-transform: uppercase;
`;

const SelectionContent = styled.div`
    flex-direction: column;
    justify-items: center;
    display: flex;
    max-height: 400px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
`;

const ImgIllustration1 = styled.img.attrs({
    alt: "Image Placeholder",
  })
    `
    position:absolute;
    margin-top: 33%;
    height: 220px;
    margin-left: 1%;
    `
  ;

  const ImgIllustration2 = styled.img.attrs({
    alt: "Image Placeholder",
  })
    `
    position:absolute;
    margin-top: 33%;
    height: 220px;    
    margin-left: 83%;
    margin-right: 1%;
    `
  ;

export {OuterBox, SelectionContainer, SelectionHeading,SelectionContent, PreviewContainer, SelectionButton, SelectionOption, ImgIllustration1, ImgIllustration2};
  