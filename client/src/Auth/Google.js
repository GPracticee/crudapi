import React from 'react';
import GoogleLogin from 'react-google-login';
// or
import { GoogleLogin } from 'react-google-login';

const Google = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
  return (
    <>
  <GoogleLogin
    clientId="434624133125-r1gh1b7r9u7h70tup44pfa0ga8csqiqa.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />
    </>
  )}

export default Google