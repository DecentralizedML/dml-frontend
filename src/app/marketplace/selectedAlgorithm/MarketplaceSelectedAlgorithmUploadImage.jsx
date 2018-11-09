import React, { Component } from "react";
import ops from "ndarray-ops";
import ndarray from "ndarray";
import loadImage from "blueimp-load-image";

import { imagenetClassesTopK } from "../../../utils/imagenet";

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

const KerasJS = window.KerasJS;

class DemoUploadImage extends Component {
  state = {
    file: null,
    imageError: null,
    result: null,
    isAnalyzing: false,
    activeTab: 0,
    model:
      "https://transcranial.github.io/keras-js-demos-data/inception_v3/inception_v3.bin"
  };

  clickUploadImageButton() {
    document.getElementById("algo-modal_upload-input").click();
  }

  analyze = async () => {
    const { file } = this.state;
    const canvas = document.createElement("canvas");
    canvas.width = 299;
    canvas.height = 299;
    const context = canvas.getContext("2d");
    const img = document.createElement("img");

    img.onload = async () => {
      this.setState({ isAnalyzing: true });

      if (!this.model) {
        this.model = new KerasJS.Model({
          filepath: this.state.model,
          gpu: KerasJS.GPU_SUPPORT
        });
      }

      loadImage(
        file,
        async img => {
          if (img.type === "error") {
            this.setState({
              result: null,
              imageError: "Cannot load image",
              isAnalyzing: false
            });
          } else {
            // load image data onto input canvas
            context.drawImage(img, 0, 0);
            // model predict
            const imageData = context.getImageData(
              0,
              0,
              context.canvas.width,
              context.canvas.height
            );

            const { data, width, height } = imageData;
            // data processing
            // see https://github.com/keras-team/keras/blob/master/keras/applications/imagenet_utils.py
            const dataTensor = ndarray(new Float32Array(data), [
              width,
              height,
              4
            ]);
            const dataProcessedTensor = ndarray(
              new Float32Array(width * height * 3),
              [width, height, 3]
            );
            ops.divseq(dataTensor, 127.5);
            ops.subseq(dataTensor, 1);
            ops.assign(
              dataProcessedTensor.pick(null, null, 0),
              dataTensor.pick(null, null, 0)
            );
            ops.assign(
              dataProcessedTensor.pick(null, null, 1),
              dataTensor.pick(null, null, 1)
            );
            ops.assign(
              dataProcessedTensor.pick(null, null, 2),
              dataTensor.pick(null, null, 2)
            );
            const preprocessedData = dataProcessedTensor.data;

            try {
              await this.model.ready();
              const inputData = {
                input_1: preprocessedData
              };
              const outputData = await this.model.predict(inputData);
              const output = outputData[this.model.outputLayerNames[0]];
              const result = imagenetClassesTopK(output, 5);
              this.setState({
                result,
                imageError: null,
                isAnalyzing: false
              });
              console.log(this.state);
            } catch (err) {
              this.setState({
                result: null,
                imageError: err.message,
                isAnalyzing: false
              });
            }
          }
        },
        {
          maxWidth: 299,
          maxHeight: 299,
          cover: true,
          crop: true,
          canvas: true,
          crossOrigin: "Anonymous"
        }
      );
    };

    img.src = file;
  };

  clear = () => {
    this.setState({
      file: null,
      imageError: null,
      result: null
    });
  };

  render() {
    return (
      <DemoWrapper>
        <DemoText>Demo</DemoText>
        <DemoContainer>
          <UploadWrapper>
            <ImageIcon />
            <UploadImageDescription>
              Upload an Image to test this algorithm
            </UploadImageDescription>
            <UploadImageButton onClick={this.clickUploadImageButton}>
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
                    this.setState({ file: e.target.result });
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </UploadImageButton>
          </UploadWrapper>
          <button onClick={this.analyze} />
        </DemoContainer>
      </DemoWrapper>
    );
  }
}

DemoUploadImage.propTypes = {};

export default DemoUploadImage;
