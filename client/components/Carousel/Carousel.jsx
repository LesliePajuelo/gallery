import Arrow from './Arrow.jsx';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div id="carousel" onClick={this.props.toggleCarousel}>
        Carousel
      </div>
    )
  }
}

module.exports = Carousel;