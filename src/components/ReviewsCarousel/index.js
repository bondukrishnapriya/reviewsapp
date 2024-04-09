// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="port-folio">
        <img src={imgUrl} className="profile-image" alt={username} />
        <p className="user-name">{username}</p>
        <br />
        <p className="comapny-name">{companyName}</p>
        <br />
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeIndex]
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Reviews</h1>
          <div className="button-content">
            <button
              className="button-arrow"
              type="button"
              onClick={this.onClickLeftArrow}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="image-1"
              />
            </button>
            {this.renderActiveReview(currentReviewDetails)}
            <button
              className="button-arrow"
              type="button"
              testid="rightArrow"

              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="image-2"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
