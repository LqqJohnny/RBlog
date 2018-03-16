import React from 'react';

import "../css/articleList.css";
import articles from "../../../../articles.json"
class ArticleList extends React.Component{
  constructor(){
    super();
  }

  render(){
    var ArticlesDom = [];
    ArticlesDom = articles.map((val,inx)=>{
      return <div className="articleItem" key={inx}>
              <div className="articleTitle"> <a href={"/detail/"+val.title}>{val.title}</a> </div>
              <div className="articleInfo">
                <span className="time">{val.date.slice(0,10)}</span>
                <span className="category">{val.categories}</span>
                <span className="tags">{val.tags || "无标签"}</span>
              </div>
              <hr/>
            </div>
    })
    return (
      <div id="articleList">
        {ArticlesDom}
      </div>
    )
  }
}

export default ArticleList;
