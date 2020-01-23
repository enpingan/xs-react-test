import React from 'react';

class HoverCamber extends React.Component {
  render() {
    return (
      <div className="hover-camber-cont">
        <h3 className="uppercase">{this.props.title}</h3>
        <a className="selection capitalize">{this.props.item}</a>
      </div>
    );
  }
}

export default HoverCamber;