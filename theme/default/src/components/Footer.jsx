import React from 'react';

import "../css/footer.css"
import {site} from '../../../../blog.config'
class Footer extends React.Component{
  constructor(){
    super();
  }


    render(){
      return (
        <div id="footer">
          <div className="footer-links">
              <a className="email" target="_blank" href={"mailto:"+site.email} style={{display: site.email?'inline-block':'none'}}> </a>
              <a className="github" target="_blank" href={site.github} style={{display: site.github?'inline-block':'none'}}> </a>
              <a className="weibo" target="_blank" href={site.weibo} style={{display: site.weibo?'inline-block':'none'}}> </a>
          </div>
          <div className="footerText">
            2018&nbsp;@lqqppl  
          </div>
        </div>)
    }
}

export default Footer;
