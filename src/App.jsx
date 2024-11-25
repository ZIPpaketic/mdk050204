import './App.css';
import logo from '../src/img/Logo.svg'
import logo1 from '../src/img/Logo1.svg'
import search from '../src/img/search.svg'
import cart from '../src/img/cart.svg'
import strip from '../src/img/strip.svg'

function App() {
  return (
    <>
    <div className='header'>
          <img src={logo} alt="logo"></img>
          <p>Organic</p>
          <ul className='tab'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Pages</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>News</a></li>
          </ul>
        
          <div className='input'>
            <input type='text'/>
            <img src={search} alt=''/>
          </div>
          
          <div className='cart'>
            <img src={cart} alt=''/>
            <p>Cart{0}</p>
          </div>       
                        
          </div>
          
                 
          <div className='banner'>
          <div className='mainBlock'>
          <div className='logo1'>
          <img src={logo1} alt=''/>
          </div>
          <div className='strip'>
          <img src={strip} alt=''/>
          </div>
          
          </div>
          <div className='text'>
          <p className='Econis-is-a-Friendly'>Econis is a Friendly<br />Organic Store</p>
            <h1>Start with Our Company First</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis. </p>
            <h1>Learn How to Grow Yourself </h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis</p>
            <h1>Farming Strategies of Today</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis. </p>
          </div>
        </div>

     </>
  );
}

export default App;