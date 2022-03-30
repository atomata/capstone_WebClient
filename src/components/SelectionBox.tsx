import styled from "styled-components";

const OuterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  background: #a5a4ea;
  height: 100vh;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-left: 2em;
  margin-right: 2em;
  width: 50%;
  height: 90%;
  max-height: 90%;
  background: #3f3d56;
  border-radius: 1.2em;
`;

const SelectionHeading = styled.div`
  width: 100%;
  padding-top: 2em;
  text-align: center;
  font-family: Inter, monospace;
  letter-spacing: 0.1em;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 2em;
  border-radius: 1.2em;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-right: 2em;
  width: 50%;
  height: 90%;
  max-height: 100%;
  background: #3f3d56;
  border-radius: 1.2em;
`;

const SelectionButton = styled.div`
  width: 10em;
  height: 3.5em;
  background: #a5a4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5em;
  justify-content: center;
  flex-direction: column;
  justify-items: center;
  display: flex;
  font-family: Inter, monospace;
  letter-spacing: 0.1em;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
`;

const SelectionOption = styled.div`
  font-family: Inter, monospace;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.1em;
  color: #ffffff;
  padding: 2em;
  text-transform: uppercase;
`;

const SelectionContent = styled.div`
  flex-direction: column;
  justify-items: center;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1.5em;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #a5a4ea;
    border-radius: 3em;
    border: 0.4em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  margin-bottom: 2em;
`;

const GifIllustration = styled.img.attrs({
  alt: "Image Placeholder",
})`
  border: 3px solid #3f3d56;
  border-radius: 1.2em;
  max-height: 100%;
  max-width: 70%;
`;

const GifContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
`;

const PreviewContent = ({ path }) => (
  <GifContainer>
    <GifIllustration src={path} />
  </GifContainer>
);
export {
  OuterBox,
  SelectionContainer,
  SelectionHeading,
  SelectionContent,
  PreviewContainer,
  SelectionButton,
  SelectionOption,
  PreviewContent,
};
