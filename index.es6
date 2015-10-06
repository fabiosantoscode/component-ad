import React from 'react';

export default class Ad extends React.Component {
  static propTypes = {
    format: React.PropTypes.oneOf(['mrec', 'halfpage']),
  }
  static formats = {
    mrec: { x: 300, y: 250 },
    halfpage: { x: 300, y: 500 }
  }
  render() {
    const size = Ad.formats[this.props.format];
    const uri = `http://placecage.com/${size.x}/${size.y}`;
    return (
      <img src={uri}/>
    );
  }
}
