import React from "react";
import {
  DemoContainer,
  DemoWrapper,
  DemoText,
  UploadWrapper,
  ImageIcon,
  UploadImageDescription,
  UploadImageButton,
  UploadImageText
} from "./UI";

const DemoUploadImage = () => {
  return (
    <DemoWrapper>
      <DemoText>Demo</DemoText>
      <DemoContainer>
        <UploadWrapper>
          <ImageIcon />
          <UploadImageDescription>
            Upload an Image to test this algorithm
          </UploadImageDescription>
          <UploadImageButton>
            <UploadImageText>Upload Image </UploadImageText>
          </UploadImageButton>
        </UploadWrapper>
      </DemoContainer>
    </DemoWrapper>
  );
};

DemoUploadImage.propTypes = {};

export default DemoUploadImage;
