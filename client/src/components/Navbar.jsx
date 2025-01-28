import React ,{useState} from 'react';
import logo from './../assets/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import Navlink from './Navlink';
import { Heart, LogIn, ShoppingBag, UserPlus } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';
import LoginDrawer from './LoginDrawer';

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const [isSignUpClick , setSignUpClick] = useState(false)
  const navlinkData = [
    { path: '/', title: 'Home' },
    { path: '/mens', title: 'Mens' },
    { path: '/womens', title: 'Women' },
    { path: '/kids', title: 'Kids' },
  ];
  const handleSignUp =() => {
    open()
    setSignUpClick(true)
  }
  const handleLogIn = () => {
    setSignUpClick(false)
    open()
  }
  return (
    <div className="sticky top-0 z-10">
      <header>
        <div className="flex mt-2  justify-between items-center p-2 mx-4">
          {/* for logo and webstie name */}
          <div className="flex gap-4 items-center">
            <img src={logo} className="w-16" />
            <h1 className="font-semibold text-xl">Shopping</h1>
          </div>

          {/* //for search bar */}
          <div>
            <input
              className="p-2 w-96 border border-black"
              type="text"
              placeholder="Search products here..."
            />
          </div>

          {/* logos and menu items */}
          <div className="flex gap-10">
            <div>
              <LogIn />
              <Link onClick={handleLogIn}>Login</Link>
            </div>
            <div>
              <UserPlus />
              <Link onClick={handleSignUp}>SignUp</Link>
            </div>
            <div>
              <ShoppingBag />
              <span>Cart</span>
            </div>
            <div>
              <Heart />
              <span>Wishlist</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 text-md border-b-1 p-4 font-semibold">
          {navlinkData.map((link) => (
            <Navlink path={link.path} title={link.title} />
          ))}
        </div>
      </header>
      <LoginDrawer close={close} opened={opened} isSignUpClick={isSignUpClick} />
    </div>
  );
}

export default Navbar;
