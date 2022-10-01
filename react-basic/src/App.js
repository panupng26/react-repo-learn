import logo from './logo.svg';
import './App.css';
import Transection from './components/Transection';

function App() {
  return (
    <section className='maincontent'>
      <img src={logo} className="App-logo" alt="logo" style={{ width:'25%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <h1 className='text-center'>แอพบัญชี</h1>
      <div className='text-center'>
        <Transection />
      </div>
    </section>
  )
}

export default App;
