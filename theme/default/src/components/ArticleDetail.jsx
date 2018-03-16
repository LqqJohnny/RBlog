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
