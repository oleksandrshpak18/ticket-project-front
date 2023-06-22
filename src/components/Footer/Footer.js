import css from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className={`${css.footer}`}>
            <p>TICKETS.UA</p>
            <p>+38 (098) 254 78 36</p>
            <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTelegram}/>
            </div>
        </div>
    );
};

export {Footer};
