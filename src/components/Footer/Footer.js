import css from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import{faPhone} from'@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className={`${css.footer}`}>
            <p>TICKETS.UA</p>

            <div className={`${css.flex}`}>
                <div>
                    <FontAwesomeIcon icon={faPhone} className={`${css.Icon}`}/>
                </div>
                <div className={`${css.ml_10}`}>
                    <div>+38 (098) 254 78 36</div>
                    <div>+38 (096) 329 49 40</div>
                </div>
            </div>

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
