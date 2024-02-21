// Write your code here.

import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <div className="faqs-list-container">
          <ul className="faqs-list">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Faqs
