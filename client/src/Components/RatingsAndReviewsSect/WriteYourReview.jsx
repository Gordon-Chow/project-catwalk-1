import React from 'react';
import styles from './reviews.module.css';
import NewStarRating from './NewStarRating.jsx';
import Characteristics from './Characteristics.jsx'

class WriteYourReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      recommend: true,
      summary: '',
      body: '',
      nickname: '',
      email: '',
      ratedCharacteristics: []
    }
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.updateCharacteristic = this.updateCharacteristic.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(newRating) {
    this.setState({rating: newRating})
  }

  handleRecommendChange(e) {
    this.setState({recommend: e.target.value})
  }

  handleFormChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  updateCharacteristic(userCharObject) {
    this.setState({ratedCharacteristics: [userCharObject, ...this.state.ratedCharacteristics]});
  }

  handleSubmit(e) {
    let recommendBool = this.state.recommend === 'true';
    let characteristics = Object.assign({}, ...this.state.ratedCharacteristics);
    let reviewData = {
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: recommendBool,
      name: this.state.nickname,
      email: this.state.email,
      characteristics: characteristics
    }
    this.props.sendNewReview(reviewData);
  }

  render() {
    return (
      <>
      <div className={`${styles.newReview} ${styles.col}`}>
        <h3 className={styles.newReviewTitle}>WRITE YOUR REVIEW</h3>
        <h4 className={styles.newReviewAbout}>About the product</h4>
        <span className={`${styles.row} ${styles.center}`}>
          <p className={styles.smallText}>Rating:</p>
          <NewStarRating handleRatingChange={this.handleRatingChange}/>
        </span>
        <span className={`${styles.row} ${styles.center}`}>
          <p className={styles.smallText}>Do you recommend this product?</p>
          <div className={styles.center} onChange={this.handleRecommendChange}>
              <label className={styles.smallText}>
                <input
                  type="radio"
                  value="true"
                  checked={this.state.recommend === "true"}
                />
                Yes
            </label>
            <label className={styles.smallText}>
                <input
                  type="radio"
                  value="false"
                  checked={this.state.recommend === "false"}
                />
                No
            </label>
          </div>
         </span>
        <Characteristics updateCharacteristic={this.updateCharacteristic} characteristics={this.props.characteristics} />
        <div className={styles.reviewInput}>
            Review Summary:
            <input type="text" placeholder="Example: 'Best Purchase Ever!'" value={this.state.summary} name="summary" onChange={this.handleFormChange} />
        </div>
        <div className={styles.reviewInput}>
          Review Body:
          <textarea
            cols="30" rows="5"
            placeholder="'Why did you like the product or not?'"
            value={this.state.body}
            name="body" onChange={this.handleFormChange}
          />
        </div>
        <div className={styles.inlineForm}>
            Nickname:
            <input className={styles.nickname} type="text" placeholder="Nickname" name="nickname" value={this.state.nickname} onChange={this.handleFormChange} />
            Email:
            <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleFormChange} />
        </div>
        <div className={styles.buttonRow}>
      <button className={`${styles.button} ${styles.submitReviewButton}`} onClick={this.handleSubmit}>Submit</button>
     </div>
      </div>

     </>
    )
  }
}

export default WriteYourReview;