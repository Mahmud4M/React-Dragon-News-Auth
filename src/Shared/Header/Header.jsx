import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='mt-5 lg:w-[29rem] mx-auto text-center'>
                <img src={logo} alt="Please Wait (Looding)" />
                <h1 className='text-lg'>Journalism Without Fear or Favour</h1>
                <p>{moment().format('dddd MMMM D YYYY')}</p>
            </div>
        </div>
    );
};

export default Header;