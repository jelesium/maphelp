import React from 'react';
import ArcGISMap from 'esri/Map';
import MapView from 'esri/views/MapView';

export class WebMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xCoord : -118
    }
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // create map
    const map = new ArcGISMap({
      basemap: 'topo-vector'
    });
    // load the map view at the ref's DOM node
    this.view = new MapView({
      container: this.mapRef.current,
      map: map,
      center: [this.state.xCoord, 34],
      zoom: 8
    });
  }

  componentWillUnmount() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  }

  handleNewAddress(){

    this.setState({
      xCoord: (this.state.xCoord - 1)
    }, console.log('working'))
    const map = new ArcGISMap({
      basemap: 'topo-vector'
    });
    this.view = new MapView({
      container: this.mapRef.current,
      map: map,
      center: [this.state.xCoord, 34],
      zoom: 8
    });
    console.log(this.state.xCoord, 'XCOORD')
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.xCoord? this.state.xCoord: null}
          </li>
          <li onMouseOver = {() => this.handleNewAddress()}>
            Los Angeles
          </li>
          <li>
            Florida
          </li>
        </ul>
      <div className="webmap" ref={this.mapRef} />
      </div>
    );
  }
}