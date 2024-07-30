import {CiEdit} from 'react-icons/ci'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineComment} from 'react-icons/md'
import {useState} from 'react'
import CreateComment from '../CreateComment'
import ShowComment from '../ShowComment'

import './index.css'

const DisplayPost = () => {
  const [activeCommentBox, setCommentBox] = useState(false)
  const onClickCommentBtn = () => {
    setCommentBox(prevState => !prevState)
  }
  return (
    <div className="Display-post-container">
      <div className="name-container">
        <h1 className="create-heading">Author Name</h1>
        <div className="btn-container">
          <CiEdit type="button" className="btn-icon" />
          <AiOutlineDelete type="button" className="btn-icon" />
        </div>
      </div>
      <div className="post-text-container">
        <p className="post-details">Post Details</p>
      </div>
      <div className="comment-container">
        <MdOutlineComment onClick={onClickCommentBtn} />
      </div>
      {activeCommentBox && (
        <>
          <ShowComment />
          <CreateComment />
        </>
      )}
    </div>
  )
}
export default DisplayPost
