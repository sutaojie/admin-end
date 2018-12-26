import React, {Component} from "react";
import menuConfig from "../../config/menuConfig";
import {NavLink} from 'react-router-dom'
import { Menu } from 'antd';
import './index.scss'
const SubMenu = Menu.SubMenu;
const renderMenuConfig = (menuArray)=>{
	return (
		menuArray.map(item=>{
			if(item.children){
				return <SubMenu key={item.key} title={item.title}>{renderMenuConfig(item.children)}</SubMenu>
			}
			return (
				<Menu.Item key={item.key}>
					<NavLink to={item.key}>
						{item.title}
					</NavLink>
				</Menu.Item>
			)
		})
	)
}

export default class NavList extends Component{
	render(){
		return(
			<div className="navList">
				<div className="logo">
					<img src="/assets/logo.svg" alt=""/>
					<h1>Admin-End</h1>
				</div>
				<Menu
					// theme="dark"
				>
						{renderMenuConfig(menuConfig)}
				</Menu>
			</div>
		)
	}
}
