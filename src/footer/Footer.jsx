import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className='text'>
            <img src={require('../images/logo.png')} alt="logo"/>
            </div>
            <ul>
                <li><Link className='footerlink' to="/">Home</Link></li>
                <li><Link className='footerlink' to="/about">About</Link></li>
                <li><Link className='footerlink' to="/blogs">Blogs</Link></li>
                <li><Link className='footerlink' to="/contact">Contact</Link></li>
            </ul>
            <div className='inpText'>
                <h3>Be the first to know</h3>
                
            </div>
        </footer>
    )
}

export default Footer;