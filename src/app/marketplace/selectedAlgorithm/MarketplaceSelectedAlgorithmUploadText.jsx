import React, { Component } from "react";
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

import wordIndex from "../../../utils/wordIndex";

const KerasJS = window.KerasJS;
const START_WORD_INDEX = 1;
const OOV_WORD_INDEX = 2;
const INDEX_FROM = 3;
const MAXLEN = 200;
const WORD_INDEX = JSON.parse(wordIndex);

class DemoUploadText extends Component {
  state = {
    textError: null,
    result: null,
    isAnalyzing: false,
    activeTab: 0,
    model:
      "https://transcranial.github.io/keras-js-demos-data/imdb_bidirectional_lstm/imdb_bidirectional_lstm.bin"
  };

  analyze = async text => {
    if (!text) {
      return this.setState({
        textError: null,
        result: null,
        isAnalyzing: false
      });
    }

    this.setState({
      textError: null,
      result: null,
      isAnalyzing: true
    });

    if (!this.model) {
      this.model = new KerasJS.Model({
        filepath: this.state.model,
        gpu: false
      });
    }

    const value = new Float32Array(MAXLEN);

    const parsedText = text
      .trim()
      .toLowerCase()
      .split(/[\s.,!?]+/gi);

    let indices = parsedText.map(word => {
      const index = WORD_INDEX[word];
      return !index ? OOV_WORD_INDEX : index + INDEX_FROM;
    });

    indices = [START_WORD_INDEX].concat(indices);
    indices = indices.slice(-MAXLEN);

    // padding and truncation (both pre sequence)
    const start = Math.max(0, MAXLEN - indices.length);
    for (let i = start; i < MAXLEN; i++) {
      value[i] = indices[i - start];
    }

    try {
      await this.model.ready();
      const outputData = await this.model.predict({ input: value });
      const [result] = new Float32Array(outputData.output);
      this.setState({
        textError: null,
        result,
        isAnalyzing: false
      });
    } catch (err) {
      this.setState({
        textError: err.message,
        result: null,
        isAnalyzing: false
      });
    }
  };

  render() {
    return (
      <DemoWrapper>
        <DemoText>Demo</DemoText>
        <DemoContainer>
          <UploadWrapper>
            <DemoContentWrapper>
              <InputText
                onChange={e => this.analyze(e.target.value)}
                placeholder="Enter text to try the algorithm here"
              />
              <SentimentResultWrapper>
                <SentimentResultText>Sentiment result:</SentimentResultText>
                <SentimentResultBox result={this.state.result}>
                  {this.state.result
                    ? Math.floor(this.state.result * 10000) / 100 + "%"
                    : "0%"}
                </SentimentResultBox>
              </SentimentResultWrapper>
            </DemoContentWrapper>
          </UploadWrapper>
        </DemoContainer>
      </DemoWrapper>
    );
  }
}

DemoUploadText.propTypes = {};

export default DemoUploadText;
