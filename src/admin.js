import React, {Component} from "react";
import {Row,Col} from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer"
import NavList from './components/NavList'
export  default  class Admin extends Component{
	render(){
		return (
			<Row>
				<Col span={3}>
					<NavList></NavList>
				</Col>
				<Col span={21}>
					<Header></Header>
					<Row>
						xxx
					</Row>
					<Footer></Footer>
				</Col>
			</Row>
		)
	}
}
