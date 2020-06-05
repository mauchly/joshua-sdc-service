//import React from 'react';
import $ from 'jquery';
import ListingSlider from './ListingSlider.jsx';
import sampleData from './sampleData.js';


class ListingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: sampleData[1],
      images: sampleData[0]
    };
  }

  componentDidMount() {
    //OLD
    // $.ajax({
    //   url: 'http://ec2-3-22-118-181.us-east-2.compute.amazonaws.com/listings',
    //   success: (data) => {
    //     this.setState({
    //       listings: data
    //     });
    //     //console.log('listing data in ListingData', data);
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });

    $.ajax({
      url: '/listings',
      success: (results) => {
        this.setState(() => ({listings: results.rows}));
      },
      error: () => {
        console.log('error in onload API call');
      }
    })

    $.ajax({
      url: '/images',
      success: (results) => {
        this.setState(() => ({images: results.rows}));
      },
      error: () => {
        console.log('error in onload API call');
      }
    })
  }

  render() {
    return (
      <div className="listing">
        <ListingSlider details={this.state.listings} />
      </div>
    );
  }
}
export default ListingData;