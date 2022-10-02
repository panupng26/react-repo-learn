import PropTypes from 'prop-types'
import './styles/Transaction.css'
const Item = ({ name, money }) => {
    return (
      <li>{name}<span>-{money}</span></li>
    )
}

Item.propTypes = {
  name:PropTypes.string.isRequired,
  money:PropTypes.number.isRequired,
}
export default Item