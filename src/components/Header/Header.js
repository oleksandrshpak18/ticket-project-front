import css from './Header.module.css';

import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHouse, faMagnifyingGlass} from'@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className={`${css.header}`}>
            <NavLink to={'/'}>
                <div className={`${css.f60}`}>TICKETS.UA</div>
            </NavLink>
            <NavLink to={'/'}>
                <div className={`${css.f40}`}>Concerts</div>
            </NavLink>
            <NavLink to={'performers'}>
                <div className={`${css.f40}`}>Performers</div>
            </NavLink>
            <NavLink to={'/venues'}>
                <div className={`${css.f40}`}>Venues</div>
            </NavLink>

            <div className={`${css.f_header}`}>
                <div className={`${css.f40}`}>...</div>
                <div className={`${css.f40}`}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                <div className={`${css.f40}`}><FontAwesomeIcon icon={faHouse} /> Україна</div>
        </div>
        </div>
    );
};

export {Header};
