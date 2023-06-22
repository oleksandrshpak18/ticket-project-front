import css from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import{faPhone} from'@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className={`${css.footer}`}>
            <p>TICKETS.UA</p>

            <p> <FontAwesomeIcon icon={faPhone} /> +38 (098) 254 78 36</p>
            <div className={`${css.socialIcons}`}>
                <FontAwesomeIcon icon={faFacebook} className={`${css.Icon}`} />
                <FontAwesomeIcon icon={faTwitter} className={`${css.Icon}`} />
                <FontAwesomeIcon icon={faInstagram} className={`${css.Icon}`}/>
                <FontAwesomeIcon icon={faTelegram} className={`${css.Icon}`}/>
            </div>
        </div>
    );
};

export {Footer};
