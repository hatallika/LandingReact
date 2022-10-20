import React, {useState} from 'react';
import logo from '../images/logo.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        } else {
          setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active': 'nav'}>
            <a href="#" className='logo'>
                <img src={logo} alt=""/>
            </a>
            <input type="checkbox" className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="#" className="active">Обо мне</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Бланки</a></li>
                <li><a href="#">Протоколы</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;