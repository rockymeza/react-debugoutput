import React from 'react';


export class DebugOutput extends React.Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 4)}</pre>
      </div>
    );
  }
}
