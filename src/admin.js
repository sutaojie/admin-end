import React, {Component} from "react";
import {Row,Col} from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer"
import NavList from './components/NavList'
import Home from './pages/home'
import './style/common.scss'
export  default  class Admin extends Component{
	render(){
		return (
			<Row className="global">
				<Col span={3}>
					<NavList></NavList>
				</Col>
				<Col span={21}>
					<Header ></Header>
					<Row>
						{/*<Home ></Home>*/}
						{this.props.children}
					</Row>
					<Footer></Footer>
				</Col>
			</Row>
		)
	}
}
