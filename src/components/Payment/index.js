import {useState} from 'react'

import './index.css'

const paymentMethodsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isActive: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isActive: true,
  },
  {
    id: 'upi',
    displayText: 'UPI',
    isActive: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isActive: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isActive: false,
  },
]

const Payment = props => {
  const {sum, items} = props
  const [isConfirm, isConfirmFuncsetter] = useState(false)
  const [selectedOption, setterSelectedOption] = useState('')

  const onChangeOption = event => {
    if (event.target.id === 'CASH ON DELIVERY') {
      setterSelectedOption(event.target.id)
    }
  }

  const onClickConfirmOrderBtn = () => {
    isConfirmFuncsetter(true)
  }

  if (isConfirm) {
    return (
      <p className="paymentMethods-head">
        Your order has been placed successfully
      </p>
    )
  }
  return (
    <div className="payment-contianer">
      <p className="paymentMethods-head Modal">Payment Methods</p>
      <ul className="paymentMethods-list">
        {paymentMethodsList.map(each => (
          <li className="each-pay-option" key={each.id}>
            <input
              type="radio"
              id={each.id}
              disabled={each.isActive}
              onChange={onChangeOption}
              value={selectedOption}
            />
            <label htmlFor={each.id} className="each-option-css">
              {each.displayText}
            </label>
          </li>
        ))}
      </ul>
      <p className="paymentMethods-head">Summary</p>
      <ul className="summary-details">
        <li>number of items: {items}</li>
        <li>Total Price: {sum}</li>
      </ul>
      <button
        type="button"
        className="Confirmorder"
        onClick={onClickConfirmOrderBtn}
        disabled={selectedOption === ''}
      >
        Confirm Order
      </button>
    </div>
  )
}
export default Payment
