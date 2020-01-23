import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let values = []

    for (let i = this.props.min; i<this.props.max; i++) {
      values.push(i)
    }

    return (
      <div className="size-selector-cont">
        <h3 className="uppercase">{this.props.title}</h3>
        <div className="size-selector">
          {values.map((item, i) => <span className="sizeValue" key={i}>{item}</span>)}
        </div>
      </div>
    );
  }
}

export default SizeSelector;