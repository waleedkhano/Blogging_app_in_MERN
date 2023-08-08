import { Link } from 'react-router-dom';



const LoginBtn = () => {

  
    return (
        <>
            <div className="LoginBtn">
                   <Link className='register' to='/register'>Register</Link>
                   <Link className='signin' to='/signin'>Sign in</Link>
                </div>

                
                

            
        </>
    )
}

export default LoginBtn;