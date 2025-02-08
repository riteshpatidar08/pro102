import { Button,  Group } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';


export function GoogleButton({handleGoogleClick}) {
  return <Button onClick={handleGoogleClick}   leftSection={<GoogleIcon />} variant="default" >Continue With Google</Button>;
}

export function SocialButtons({handleGoogleClick}) {
  return (
    <Group justify="center" p="md">
      <GoogleButton handleGoogleClick={handleGoogleClick}>Continue with Google</GoogleButton>
    </Group>
  );
}
