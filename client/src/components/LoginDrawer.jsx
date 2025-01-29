import { Drawer, Button } from '@mantine/core';
import Login from './Login';
import Register from './Register';

export default function LoginDrawer({ opened, close, isSignUpClick }) {
  console.log(isSignUpClick);
  return (
    <>
      <Drawer
        opened={opened}
        position="right"
        onClose={close}
        // title={isSignUpClick ? 'Register' : 'Login'}
      >
        {isSignUpClick ? <Register /> : <Login close={close} />}
      </Drawer>
    </>
  );
}
