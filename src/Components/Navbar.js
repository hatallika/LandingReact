import React, {useState} from 'react';
import logo from '../images/logo.svg';
import * as svg from '../images/svg_icons'

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
            <div className='menu-wrap'>
                <a href="#" className='logo'>
                    <img src={logo} alt="" width={36} height={36}/>
                </a>
                <input type="checkbox" className='menu-btn' id='menu-btn'/>
                <label className='menu-icon' htmlFor='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><a href="#" className="active">Обо мне</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Бланки</a></li>
                    <li><a href="#">Протоколы</a></li>
                </ul>
            </div>

            <div className='social'>
                <a href="#" className='social-icons social-icons__twitter'>
                    {svg.socialTwitter}
                </a>
                <a href="#" className='social-icons social-icons__instagram'>
                    {svg.socialInstagram}
                </a>
                <a href="#" className='social-icons social-icons__facebook'>
                    {svg.socialFacebook}
                </a>
            </div>

            <div>
                <input type="checkbox" className='menu-auth-btn' id='menu-auth-btn'/>
                <label className='menu-auth-icon' htmlFor='menu-auth-btn'>
                    <span className='nav-icon'>{svg.profileIcon}</span>
                </label>
            <ul className='menu-auth'>
                <li><a href="#" >Вход</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Регистрация</a></li>
            </ul>
            </div>

        </nav>
    );
};

export default Navbar;