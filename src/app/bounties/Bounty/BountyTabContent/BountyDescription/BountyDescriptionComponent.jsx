import React from "react";
import PropTypes from "prop-types";
import { Editor, createEditorState } from "medium-draft"; //https://github.com/brijeshb42/medium-draft
import mediumDraftExporter from "medium-draft/lib/exporter";
import "medium-draft/lib/index.css";

class BountyDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: createEditorState() };
    this.onChange = editorState => this.setState({ editorState });
    this.refsEditor = React.createRef();
  }

  componentDidMount() {
    this.props.edit && this.refsEditor.current.focus();
  }

  renderHtml() {
    const editorStateNew = this.state.editorState;
    const renderedHTML = mediumDraftExporter(
      editorStateNew.getCurrentContent()
    );
  }

  renderContent() {
    return this.props.content;
  }

  renderEditor() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          ref={this.refsEditor}
          editorState={editorState}
          onChange={this.onChange}
          placeholder="Add your description..."
        />
      </div>
    );
  }

  render() {
    return this.props.edit ? this.renderEditor() : this.renderContent();
  }
}

BountyDescription.propTypes = {
  content: PropTypes.string
};

export default BountyDescription;
