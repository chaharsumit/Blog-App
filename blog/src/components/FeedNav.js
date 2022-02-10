import React from "react";

export default class FeedNav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='feed-menu flex'>
        <li onClick={this.props.clearTag} className={this.props.selectedTag ? 'feed-status' : 'feed-status active-feed'}>Global Feed</li>
        {
          this.props.selectedTag ? <li className='feed-status active-feed'>#{this.props.selectedTag}</li> : ''
        }
      </ul>
    )
  }
}