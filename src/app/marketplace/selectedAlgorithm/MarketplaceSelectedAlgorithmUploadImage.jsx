import React from "react";
import {
  DemoContainer,
  DemoWrapper,
  DemoText,
  UploadImageWrapper,
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
        <UploadImageWrapper>
          <ImageIcon />
          <UploadImageDescription>
            Upload an Image to test this algorithm
          </UploadImageDescription>
          <UploadImageButton>
            <UploadImageText>Upload Image </UploadImageText>
          </UploadImageButton>
        </UploadImageWrapper>
      </DemoContainer>
    </DemoWrapper>
  );
};

DemoUploadImage.propTypes = {};

export default DemoUploadImage;
