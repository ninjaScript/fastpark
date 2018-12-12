import React from 'react';
import FavCard from "./FavCard.jsx";
import { Row, Col } from 'reactstrap';
import UserInfo from "./UserInfo.jsx";
// import Pagination from "react-js-pagination";
import Pagination from './Pagination';
// import "bootstrap/dist/css/bootstrap.min.css";

var exampleUser = [{
	id: 3,
    		name: "Ahmad",
    		location: "Amman",
    		imgUrl: "https://randomuser.me/api/portraits/women/91.jpg",
    		descr: "hi its me someone"
    	}]

class UserProfile extends React.Component {
	constructor(props) {
    super(props)
    	
      var exampleItems = [...Array(14).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
      this.state = {
          exampleItems: exampleItems,
          pageOfItems: []
      };
 
      // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
      this.onChangePage = this.onChangePage.bind(this);
    }
  

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }


	render() {
		return (
			<div>
			<div className="container">
				{exampleUser.map(user =>
								<UserInfo key={user.id} user={user}/>	
            	)}	
				</div>
					<div className="container">
            <div className="text-center">       
              <h4>Your Favorite Parking Lots</h4>
              <div className="fav">
              <Row>
              {this.state.pageOfItems.map(item =>
								<FavCard key={item.id} item={item}/>	
            	)}
						</Row>
						</div>
						<div>
            <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
            </div>
          </div>
         </div>
         </div>
         
		)	
	}
}

export default UserProfile;