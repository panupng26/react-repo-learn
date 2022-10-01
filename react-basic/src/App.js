import logo from './logo.svg';
import './App.css';
import Transection from './components/Transection';

function App() {
  return (
    <section className='maincontent'>
      <img src={logo} className="App-logo" alt="logo" style={{ width:'25%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      <div className='container'>
        <h1 className='text-center'>แอพบัญชี React</h1>
        <div>
          <Transection />
        </div>
      </div>
    </section>
  )
}

export default App;
