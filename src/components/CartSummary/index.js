// Write your code here

import Popup from 'reactjs-popup'

import Cartcontext from '../../context/CartContext'

import Payment from '../Payment'

import 'reactjs-popup/dist/index.css'

import './index.css'

const CartSummary = props => (
  <Cartcontext.Consumer>
    {value => {
      const {cartList} = value
      const {sum} = props
      return (
        <div className="order-total-container">
          <h1 className="order-total-para">
            Order Total:
            <p className="amount"> Rs {sum} /-</p>
          </h1>
          <p className="order-total-para">{cartList.length} items in cart</p>
          <Popup
            modal
            trigger={
              <button type="button" className="check-out-btn">
                Checkout
              </button>
            }
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 'auto',
              marginLeft: '-58px',
            }}
            contentStyle={{
              backgroundColor: '#fff',
              width: '450px',
              height: '280px',
              margin: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            position="top left"
          >
            <Payment sum={sum} items={cartList.length} />
          </Popup>
        </div>
      )
    }}
  </Cartcontext.Consumer>
)
export default CartSummary
