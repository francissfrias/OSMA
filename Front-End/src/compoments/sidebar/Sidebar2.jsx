import React from 'react'
import "./sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StickyBox from "react-sticky-box";


import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Link } from "react-router-dom";

export default function Sidebar2() {
    return (
     
        <div className="sidebar">   <StickyBox offsetTop={20} offsetBottom={20}>
            <div className="siderbarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                    <Link to="/" className="link" >
                        <li className="sidebarListItem"  >   
                        <HomeIcon className="sidebarListIcon"/>Home        
                        </li>
                        </Link>
                        <Link to="/Dashboard" className="link"   >
                        <li className="sidebarListItem">
                           <DashboardIcon className="sidebarListIcon"/>Dashboard
                        </li>
                        </Link>   
                        <Link to="/studentpage" className="link"  >
                        <li className="sidebarListItem">                        
                         <SupervisedUserCircleIcon className="sidebarListIcon"/>Student List
                     
                        </li>
                        </Link>            
                   </ul>
                </div> 
            </div> </StickyBox>
            </div>
       
       
    )
}
