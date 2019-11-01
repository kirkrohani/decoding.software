import React from 'react';
import './css/App.css';

class BlogPost extends React.Component {

  // handleUpVote = () =>  {
  //   this.props.onVote(this.props.post.id);
  // }

  render () {

    const {imageUrl, url, title, description, submitterAvatarUrl, votes} = this.props.post;
    console.log('imageURL: ', imageUrl);
    return (
      <div className="item">

        <div className="image">
          <img alt="Main blog post" src={imageUrl} />
        </div>
 
        <div className="middle aligned content">
          <div className="header">
            <a href={url}>{title}</a>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img alt= "posters avatar" src={submitterAvatarUrl} className="ui avatar image" />
            <a href="http://wwww.google.com">
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>

        </div>
      </div>
    );

  }
}

export default BlogPost;