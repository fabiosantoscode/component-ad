import React from 'react';
import LazyLoad from 'react-lazy-load';

export default class Advert extends React.Component {
  static propTypes = {
    format: React.PropTypes.oneOf(['mrec', 'halfpage']),
  }
  static formats = {
    mrec: { x: 300, y: 250 },
    halfpage: { x: 300, y: 500 }
  }
  render() {
    const size = Advert.formats[this.props.format];
    const uri = `http://placecage.com/${size.x}/${size.y}`;
    return (
      <LazyLoad height={size.y}>
        <img src={uri}/>
      </LazyLoad>
    );
  }
}
