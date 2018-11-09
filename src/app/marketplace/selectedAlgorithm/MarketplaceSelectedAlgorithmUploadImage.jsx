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

const DemoUploadImage = props => {
  const { uploadedImage, uploadImage } = props;

  const clickUploadImageButton = () => {
    document.getElementById("algo-modal_upload-input").click();
  };
  const upLoadImage = () => {
    document.getElementById("user_avatar").click();
  };

  return (
    <DemoWrapper>
      <DemoText>Demo</DemoText>
      <DemoContainer>
        <UploadWrapper>
          <ImageIcon />
          <UploadImageDescription>
            Upload an Image to test this algorithm
          </UploadImageDescription>
          <UploadImageButton onClick={clickUploadImageButton}>
            <UploadImageText>Upload Image </UploadImageText>
            <input
              style={{ display: "none" }}
              id="algo-modal_upload-input"
              type="file"
              accept="image/*"
              onChange={e => {
                const {
                  target: {
                    files: [file]
                  }
                } = e;
                const reader = new FileReader();
                reader.onload = e => {
                  uploadImage(e.target.result);
                };
                reader.readAsDataURL(file);
              }}
            />
          </UploadImageButton>
        </UploadWrapper>
      </DemoContainer>
    </DemoWrapper>
  );
};

DemoUploadImage.propTypes = {};

export default DemoUploadImage;
