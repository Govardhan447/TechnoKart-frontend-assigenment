import {CiEdit} from 'react-icons/ci'
import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const DisplayPost = () => (
  <div className="Display-post-container">
    <div>
      <h1 className="create-heading">Author Name</h1>
      <div>
        <CiEdit type="button" className="btn-icon" />
        <AiOutlineDelete type="button" className="btn-icon" />
      </div>
    </div>
    <div className="post-text-container">
      <p className="post-details">Post Details</p>
    </div>
  </div>
)

export default DisplayPost
