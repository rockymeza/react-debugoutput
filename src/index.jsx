import React from 'react';

import {DebugOutput} from './DebugOutput';


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleProps: '{"a": 1}'
    };
  }

  render() {
    var exampleProps,
        parseSuccessful = true;
    try {
      exampleProps = JSON.parse(this.state.exampleProps);
    } catch (Exception) {
      parseSuccessful = false;
    }

    return (
      <div>
        <textarea value={this.state.exampleProps} onChange={this.updateExample.bind(this)} />
        {parseSuccessful ? <DebugOutput {...exampleProps} /> : null}
      </div>
    );
  }

  updateExample(event) {
    this.setState({exampleProps: event.target.value});
  }
}


React.render(<Example />, document.getElementById('app'));
