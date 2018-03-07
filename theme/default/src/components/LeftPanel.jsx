import React from 'react';
import {BrowserRouter  as Router, Link} from 'react-router-dom'
import { site,menu } from '../../../../blog.config'
import "../css/LeftPanel.css"



class LeftPanel extends React.Component{
  constructor(){
    super();

  }
  render(){
    let menuDom = [] ;
    for(var key in menu){
        let val = menu[key];
        menuDom.push( <li className="menuItem" key = {key}>
          <a  href={val.href}><img className="icon"  src={val.icon} />{val.name}</a>
        </li> );
    }

    return (<div id="leftPanel">
              <div id="usericon"><img src={site.usericon} alt=""/></div>

              {/* menu */}
              <div className="menuList">
                <ul className="list">
                  {menuDom}
                </ul>
              </div>
            </div>)
  }
}

export default LeftPanel;
