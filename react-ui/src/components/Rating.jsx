
import React from 'react'

import Rating from 'react-rating';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class ResetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};

    this.handleClick = this.handleClick.bind(this);
    this.rating = this.rating.bind(this);
  }

  rating(rate){
    console.log(this.state.value);
  }

  handleClick(event) {
    this.setState({value: undefined});
  }

  render() {
    return (
      <div>
        {/* <Rating {...this.props} initialRating={this.state.value} />
        <button onClick={this.handleClick}>Reset</button> */}
        <Rating  onChange={(rate) => this.setState.value = rate}
        
  emptySymbol={<img src="../img/star-empty.png" className="icon" />}
  fullSymbol={<img src="../img/star-full.png" className="icon" />}
/>
        
      </div>
    );
  }
}
 
<ResetRating placeholderRating={3} />



export default ResetRating;