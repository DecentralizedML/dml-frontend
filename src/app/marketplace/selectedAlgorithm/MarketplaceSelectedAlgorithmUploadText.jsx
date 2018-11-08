import React from "react";
import {
  DemoContainer,
  DemoWrapper,
  DemoText,
  UploadWrapper,
  DemoContentWrapper,
  InputText,
  SentimentResultWrapper,
  SentimentResultText,
  SentimentResultBox
} from "./UI";

const DemoUploadText = () => {
  return (
    <DemoWrapper>
      <DemoText>Demo</DemoText>
      <DemoContainer>
        <UploadWrapper>
          <DemoContentWrapper>
            <InputText placeholder="Enter text to try the algorithm here" />
            <SentimentResultWrapper>
              <SentimentResultText>Sentiment result:</SentimentResultText>
              <SentimentResultBox>0%</SentimentResultBox>
            </SentimentResultWrapper>
          </DemoContentWrapper>
        </UploadWrapper>
      </DemoContainer>
    </DemoWrapper>
  );
};

DemoUploadText.propTypes = {};

export default DemoUploadText;
