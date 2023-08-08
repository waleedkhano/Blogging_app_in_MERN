import './component.css';


const BooksCard = (props) =>{
    return(
        <>
            <div className='bookcard'>
            <div>
                <img src={props.bookImg} alt='books' />
                <p>{props.title}</p>
                <p>{props.price}</p>
                </div>
            </div>    
        </>
    )
}

export default BooksCard;