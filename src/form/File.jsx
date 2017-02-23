import React from 'react';

class InputFile extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  state = {
    file: null,
    text: '',
  }
  onChange(e) {
    this.setState({
      file: e.target.files[0],
      text: '',
    });
  }
  handleLoad() {
    const file = this.state.file;
    const reader = new FileReader();

    reader.onerror = () => window.alert('Failed to load');
    reader.onload = () => this.setState({
      file: null,
      text: reader.result,
    });

    reader.readAsText(file);
  }
  render() {
    return (
      <div>
        <input type="file" className="btn" onChange={this.onChange} />
        { this.state.file && <input type="button" className="btn btn-primary" onClick={this.handleLoad} value="読み込む" /> }
        <div>
          { this.state.text }
        </div>
      </div>
    );
  }
}

export default InputFile;
