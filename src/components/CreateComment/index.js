import {IoSendSharp} from 'react-icons/io5'
import './index.css'

const CreateComment = () => {
  const onSubmitCommentForm = () => {}
  const onClickSendComment = () => {}
  return (
    <div className="create-comment-container">
      <h1 className="comment-heading">Your Comment</h1>
      <form className="comment-text-area" onSubmit={onSubmitCommentForm}>
        <input className="comment-area" type="text" />
        <IoSendSharp
          type="button"
          className="send-btn"
          onClick={onClickSendComment}
        />
      </form>
    </div>
  )
}
export default CreateComment
