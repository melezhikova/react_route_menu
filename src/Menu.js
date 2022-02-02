import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu">
            <NavLink to="/" className={(navData) => (navData.isActive ? "menu__item menu__item-active" : "menu__item")}>Главная</NavLink>
            <NavLink to="/drift" className={(navData) => (navData.isActive ? "menu__item menu__item-active" : "menu__item")}>Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={(navData) => (navData.isActive ? "menu__item menu__item-active" : "menu__item")}>Time Attack</NavLink>
            <NavLink to="/forza" className={(navData) => (navData.isActive ? "menu__item menu__item-active" : "menu__item")}>Forza Karting</NavLink>
        </nav>
    );
}

export default Menu;