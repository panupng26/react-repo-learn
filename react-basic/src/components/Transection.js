import Item from "./Item"
import './styles/Transaction.css'
const Transection = () => {
  const data = [
    {id:1, name: 'ค่ารักษาพยาบาล', money: 2000 },
    {id:2, name: 'เงินเดือน', money: 2000},
    {id:3, name: 'ค่าสารพัด', money: 4000 },
  ]
    return (
      <ul className="item-list">
        {
        data.map((element,index) => {
          const { name, money } = element
          return <Item name={name} money={money} key={index}/>
          // return <Item {...element} key={element.id} />
        })
        }
      </ul>
    )
}

export default Transection