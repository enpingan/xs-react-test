import React from 'react';

class ApplyFilterBtn extends React.Component {
  render() {
    return (
      <button className="uppercase">{this.props.label}</button>
    );
  }
}

export default ApplyFilterBtn;