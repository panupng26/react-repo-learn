import './styles/Transaction.css'
const Item = () => {
    const name = "พักโรงแรม"
    const money = 250
    return (
      <li>{name}<span>-{money}</span></li>
    )
  }
export default Item