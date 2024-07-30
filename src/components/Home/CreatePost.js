import {Component} from 'react'

import './index.css'

class CreatePost extends Component {
  state = {postDetails: ''}

  render() {
    return (
      <div className="create-post-container">
        <h1 className="create-heading">Create Your Post</h1>
        <form className="post-text-area">
          <textarea className="text-area" type="text" rows={10} cols={35}>
            {}
          </textarea>
          <button type="submit" className="trigger-button">
            Post
          </button>
        </form>
      </div>
    )
  }
}

export default CreatePost
