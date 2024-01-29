
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
let Header = () => {
    return (
        <>

            <Navbar fluid rounded className='bg-gray-300'>
                <Link to="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Social Media</span>
                </Link>

                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
            </Navbar>
        </>

    )
}

export default Header