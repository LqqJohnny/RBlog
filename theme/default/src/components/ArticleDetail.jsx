import React from 'react';
import ReactMarkdown  from 'react-markdown';
import allArt from '../../../../articles.json';
import Prism from 'prismjs'
import '../css/articles.css'
class ArticleDetail extends React.Component{
  constructor(){
    super();
    this.state={
      articleInfo:{}
    };

  }

  componentWillMount(){
    var id  = this.props.match.params.id;
    var targetArt = allArt.filter(function(val,i){
      return val.title === id;
    })[0];
    this.setState({'articleInfo':targetArt});

  }
  render(){

    return (
      <div className="articleDetail">
          <p className="articleTitle">{this.state.articleInfo.title}</p>
          <div className="articleInfo">
            <span className="time">{this.state.articleInfo.date.slice(0,10)}</span>
            <span className="category">{this.state.articleInfo.categories}</span>
            <span className="tags">{this.state.articleInfo.tags || "无标签"}</span>
          </div>
          <ReactMarkdown source={this.state.articleInfo.content} escapeHtml={false} ></ReactMarkdown>
          <pre className="cow">
                                &nbsp;&nbsp;(__)<br />
                              /   oo      ______<br />
                              |  /\_|     |      \<br />
                              |  |___     |       |<br />
                              |   ------@ |_______|<br />
                              *  |  |   ----   |    |<br />
                              \ |  |_____<br />
                              \|________|<br />
                              author @CompuCow
        </pre>
      </div>

    )
  }

  componentDidMount () {
    Prism.highlightAll()
  }

  componentDidUpdate () {
    Prism.highlightAll()
  }

}

export default ArticleDetail;
