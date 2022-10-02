import { useState } from 'react';
import './styles/FormComponent.css'
const FormComponent = () => {
    const [name, setName] = useState('')
    const [money,setMoney] = useState(0)

    const inputMoney = (e) => {
        setMoney(e.target.value)
    }
    const inputName = (e) => {
        setName(e.target.value)
        console.log('this name:', name)
    }
    const addItem = (e) => {
        e.preventDefault();
        const itemData = {
            name:name,
            money:Number(money)
        }
        console.log('item data:', itemData)
        setName('')
        setMoney(0)
    }
    return (
        <div>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputName} value={name}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ | - รายจ่าย)" onChange={inputMoney} value={money}/>
                </div>
                <div>
                    <button type="summit" className='btn' onClick={addItem}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent