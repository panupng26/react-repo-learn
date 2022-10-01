import './styles/Item.css'
const Item = () => {
    const name = "พักโรงแรม"
    const money = 250
    return (
      <li className='items'>{name}<span>-{money}</span></li>
    )
  }
export default Item