import * as React from 'react';
import { connect } from "react-redux";
import { State } from '../../state';
import './Upload.css';

interface UploadProps extends State {
}

class Upload extends React.Component<UploadProps, {}> {

  /*
  public shouldComponentUpdate (nextProps: UploadProps): boolean {
    console.log(this.props);
    console.log(nextProps);
    return true;
  }
  */

  public render () {
    return (
      <div>
        <h1>Upload</h1>
        <pre>{ JSON.stringify(this.props) }</pre>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
  })
)(Upload);
