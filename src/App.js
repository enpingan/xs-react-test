import React from 'react';
import ButtonGroup from './components/button-group';
import HoverCamber from './components/hover-camber';
import SizeSelector from './components/size-selector';
import ApplyFilterBtn from './components/apply-filter-btn';
import './App.scss'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonContents: [
        {
          title: "terrain",
          items: "all terrain,freestyle,powder"
        },
        {
          title: "riding level",
          items: "beginner,intermediate,expert"
        },
        {
          title: "shape",
          items: "directional twin,directional,true twin"
        }
      ],
      camberContent: {
        title: "camber",
        item: "hover camber"
      },
      sizeValRange: {
        title: "Size",
        min: 150,
        max: 156
      },
      filterBtn: {
        label: "apply filters"
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.buttonContents.map((btn, i) => 
          <ButtonGroup  key={i} 
                        title={btn.title} 
                        items={btn.items}
          />
        )}
        <HoverCamber  title={this.state.camberContent.title} 
                      item={this.state.camberContent.item}
        />
        <SizeSelector title={this.state.sizeValRange.title}
                      min={this.state.sizeValRange.min} 
                      max={this.state.sizeValRange.max}
        />
        <ApplyFilterBtn label={this.state.filterBtn.label}/>
      </div>
    );
  }
}

export default App;