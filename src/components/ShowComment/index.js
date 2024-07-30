import {CiEdit} from 'react-icons/ci'
import {AiOutlineDelete} from 'react-icons/ai'
import {useState} from 'react'

import './index.css'

const ShowComment = () => {
  const [activeCommentBox, setCommentBox] = useState(false)
  const onClickEdit = () => {
    setCommentBox(prevState => !prevState)
  }
  return (
    <div className="Display-comment-container">
      <div className="name-container">
        <h1 className="create-heading">Author Name</h1>
        <div className="btn-container">
          <CiEdit type="button" className="btn-icon" onClick={onClickEdit} />
          <AiOutlineDelete type="button" className="btn-icon" />
        </div>
      </div>
      <div className="show-comment-container">
        <p className="show-details">Comment Details</p>
      </div>
    </div>
  )
}
export default ShowComment
