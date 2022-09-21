// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationdetails, Updatebalance} = props
  const {value} = denominationdetails

  const withDraBalance = () => {
    Updatebalance(value)
  }

  return (
    <li className="list-container">
      <button type="button" className="button-value" onClick={withDraBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
