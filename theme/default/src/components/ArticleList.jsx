import React from 'react';

import "../css/articleList.css";
import ReactMarkdown  from 'react-markdown';
import articles from "../../../../articles.json"
class ArticleList extends React.Component{
  constructor(){
    super();
  }

  render(){
    var ArticlesDom = [];
    ArticlesDom = articles.map((val,inx)=>{
      var moreIdx = val.content.match(/<!--\s*more\s*-->/);
      var endPos = 0 ;
      if(moreIdx!=null){
        endPos= moreIdx.index;
      }else{
        endPos=30;
      }
      return <div className="articleItem" key={inx}>
              <div className="articleTitle"> <a href={"/detail/"+val.title}>{val.title}</a> </div>
              <div className="articleInfo">
                <span className="time">{val.date.slice(0,10)}</span>
                <span className="category">{val.categories}</span>
                <span className="tags">{val.tags || "无标签"}</span>
                <div className="articleDesc">
                  <ReactMarkdown source={val.content.substring(0,endPos)} escapeHtml={false} ></ReactMarkdown>
                </div>
                <p className="more"> <a href={"/detail/"+val.title}>查看更多 >></a> </p>
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
