import './App.css';
import { BsFillShieldLockFill,BsTelephoneFill } from "react-icons/bs";
import React from "react"
import { Box,
        Button,
        Heading,
        Text ,
        
       } from "@chakra-ui/react";
       import OtpInput from 'react-otp-input';
       import PhoneInput from "react-phone-input-2";
       import {auth} from "./firebase";
       import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
       import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [otp,setOtp] = React.useState("");
  const [phone,setPhone] = React.useState("");

  function onCaptchaVerify(){
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
         onSignup()
        },
        'expired-callback': () => {

        }
      }, auth);
    }
  }

  function onSignup(){
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh= "+" + phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      toast.success("Otp send successfully")
    }).catch((error) => {
      console.log(error.message);
    });
  }
  function onOtpVerify(){
    window.confirmationResult.confirm(otp).then(async(res) => {
      console.log(res);
    }).catch(error => console.log(error.message))
  }
  return (
    <Box mt={"50px"}>
      <Heading textAlign={"center"}>Login from your Phone Number</Heading>
      <Toaster toastOptions={{duration:4000}} />
      <div id='recaptcha-container'></div>
      <Box margin={"auto"} w={"50px"} h={"50px"} mt={"50px"}><BsFillShieldLockFill size={30} /></Box>
        <label>Enter Otp</label>
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputType='number'
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    <Button variant={"ghost"} onClick={onOtpVerify}>Verify Otp</Button>
    
    <Box margin={"auto"} w={"50px"} h={"50px"} mt={"50px"}><BsTelephoneFill size={30} /></Box>
    <label>Enter Phone Number</label>
     <PhoneInput
     country={'in'}
     value={phone}
     onChange={setPhone}
     />
    <Button variant={"ghost"} onClick={onSignup}>Verify Otp</Button>
      
    </Box>
  );
}

export default App;
