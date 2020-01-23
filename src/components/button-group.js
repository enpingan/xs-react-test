import React from 'react';

class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.length > 0 ? props.items.split(',') : []
    }
  }
  render() {
    return (
      <div className="btn-group-container">
        <h3 className="uppercase">{this.props.title}</h3>
        <ul className="btn-group">
          {this.state.items.map((item, i) => <li className="capitalize" key={i}><a>{item}</a></li>)}
        </ul>
      </div>
    );
  }
}

export default ButtonGroup;