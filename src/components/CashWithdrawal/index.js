// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CasWithdrawal extends Component {
  state = {balance: 2000}

  Updatebalance = value => {
    this.setState(prevState => {
      console.log(`previoustate value is ${prevState.balance}`)
      return {balance: prevState.balance - value}
    })
  }

  render() {
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="sarah-williams-container">
            <p className="s-logo">{initial}</p>
            <p className="sarah-name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {balance} <br /> <span className="in-rupees">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>

          <ul className="unorder-list-container">
            {denominationsList.map(eachitem => (
              <DenominationItem
                denominationdetails={eachitem}
                key={eachitem.id}
                Updatebalance={this.Updatebalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CasWithdrawal
