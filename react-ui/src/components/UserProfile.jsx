import React from 'react';
import FavCard from "./FavCard.jsx";
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import UserInfo from "./UserInfo.jsx";
// import Pagination from "react-js-pagination";
import Pagination from './Pagination';
// import "bootstrap/dist/css/bootstrap.min.css";
import profBack from "../style/background.jpg";
import "../style/Home.css";
import woman from "../style/woman.jpeg";
import logo from "../style/logo.png";
import "../style/Home.css";

var exampleUser = [{
	id: 3,
        name: "Mary Joy Nebres",
        job: "Software Engineer",
    		address: "Hacker Haus, Amman, Jordan",
    		imgUrl: woman,
        email: "radwanabdoh@yahoo.com",
        phoneNumber: "+962 79642 6783"
    	}]

class UserProfile extends React.Component {
	constructor(props) {
    super(props)
      var exampleItems = [...Array(14).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
      this.state = {
          exampleItems: exampleItems,
          pageOfItems: []
      };
      
  
 
    
      this.onChangePage = this.onChangePage.bind(this);
    }
  

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

	render() {
		return (
			<div>
         <Navbar  light>
          <NavbarBrand href="/" className="mr-auto"><img src={logo} width="40px" height="40px" className="logo"/><h2 className="logoName">arkIn</h2></NavbarBrand>
            <Nav>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}}  href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="bt" style={{color: "#b43932"}}  href="#">Need Assistance</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        <img src = {profBack} className="profile"/>
			<div className="profileBox">
				<UserInfo key={this.props.location.state.user._id} user={this.props.location.state.user}/>

				</div>
					 <div className="container1">
            <div className="text-center" style={{marginTop: "20px"}}>       
              <h4>Favorite Parking Lots</h4>
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