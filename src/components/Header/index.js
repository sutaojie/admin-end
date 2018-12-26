import React, {Component} from "react";
import {Row,Col} from 'antd'
import Util from '../../utils/utils'
import './index.scss'
export default class Header extends Component{
	state={}
	componentWillMount(){
		const username = 'Su taojie'
		this.setState({
			username,
		})
		setInterval(()=>{
			let sysTime = Util.formateDate(new Date().getTime())
			this.setState({
				sysTime
			})
		},1000)
		
	}
	render(){
		return(
			<div className="nav-header">
				<Row className="nav-header-info">
					<Col span={24}>
						<span>欢迎，{this.state.username}</span>
						<a href="#">退出</a>
					</Col>
				</Row>
				<Row className="nav-header-detail">
					<Col span={4}>
						首页
					</Col>
					<Col span={20} className="nav-header-detail-info">
						<span>{this.state.sysTime}</span>
					</Col>
				</Row>
			</div>
		)
	}
}
