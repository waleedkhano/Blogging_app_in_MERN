import { Link } from 'react-router-dom';
import BooksCard from '../components/BooksCard';
import Footer from '../footer/Footer';


const Home = () => {
    return (
        <home>
            <div className='top'>
                <div className="coverImg">
                    <img src={require('../images/cover-image.jpg')} alt="cover-img" />
                </div>
                <div className='coverText'>
                    <h1>I'll Give You The Truth About Blogging</h1>
                    <p>We were guests at this all inclusive private island resort, they invited us to stay and give them some extra publicity. Take a look, but this is rare for us..</p>
                    <Link to='/blogs'><button>Explore Blogs</button></Link>
                </div>
            </div>
            <div className='feature'>
                <h1>Discover Your New You</h1>
                <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter. So before remark at depart. Did son unreserved themselves indulgence its. <br /> Agreement gentleman rapturous am eagerness it as resolving household. Direct wicket little of talked lasted formed or it. Sweetness consulted may prevailed for bed out sincerity.

                    It as announcing it me stimulated frequently continuing. Least their she you now above going stand forth. <br /> He pretty future afraid should genius spirit on. Set property addition building put likewise get. Of will at sell well at as. Too want but tall nay like old. </p>
            </div>
            <div className='books'>
                <h1>featured Books</h1>
                <BooksCard price="$10.0" title="Rich dade" bookImg={require('../images/book1.PNG')} />
                <BooksCard price="$10.0" title="Rich dade" bookImg={require('../images/book2.PNG')} />
                <BooksCard price="$10.0" title="Rich dade" bookImg={require('../images/book3.PNG')} />
            </div>
            <Footer/>
        </home>
    )
}

export default Home;