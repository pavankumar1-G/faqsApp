// Write your code here.
import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {isVisible: false}

  onClickQuestionBtn = () => {
    this.setState(prevState => ({isVisible: !prevState.isVisible}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {isVisible} = this.state

    const imageUrl = isVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isVisible ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="plus-minus-btn"
            type="button"
            onClick={this.onClickQuestionBtn}
          >
            <img src={imageUrl} alt={altText} className="img-icon" />
          </button>
        </div>
        {isVisible && (
          <div className="answer-container">
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
