import {Popup} from 'reactjs-popup'
import Header from '../Header'
import CreatePost from './CreatePost'
import DisplayPost from '../DisplayPost'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Review on Politices</h1>
        <img
          src="https://res.cloudinary.com/ds1piowcn/image/upload/c_crop,w_900,h_400/v1722323465/politics_logo_itlb8d.jpg"
          alt="political logo"
          className="home-mobile-img"
        />
        <p className="home-description">
          Political symbols simplify and “summarize” the political structures
          and practices for which they stand; can connect institutions and
          beliefs with emotions; can help make a polity or political movement
          more cohesive.
        </p>
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Create Post
            </button>
          }
        >
          {close => (
            <div className="popup-container">
              <CreatePost />
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
              >
                {}
              </button>
            </div>
          )}
        </Popup>
      </div>
      <img
        src="https://res.cloudinary.com/ds1piowcn/image/upload/c_crop,w_900,h_400/v1722323465/politics_logo_itlb8d.jpg"
        alt="political logo"
        className="home-desktop-img"
      />
    </div>
    <DisplayPost />
  </>
)

export default Home
