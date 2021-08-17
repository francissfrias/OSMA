import React from 'react'
import "./topbar.css"
import { Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
          <div className="topbarWrapper">
              <div className="topLeft">
                  <span className="logo">Admin</span>
                  </div>             
                        <div className="topRight">
                        <div className="topbarIconContainer"> 
                        <Settings />
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Cavite_State_University.png" alt="" className="topAvatar" />
                </div>
             </div>
        </div>
        
    );
}
