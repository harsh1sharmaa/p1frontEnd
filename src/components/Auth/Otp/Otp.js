import React, { useState } from "react";
import OtpInput from "react-otp-input";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loder from "../../Loder/Loder";

function Otp(props) {
  const [otp, setotp] = useState("");
  const [loder, handleLoader] = useState(false);
  console.log(props);
  const navigate = useNavigate();
  const handleChange = (x) => {
    setotp(x);
    if (x.length == 6) {
      console.log("OTP");
      console.log(x);
      //  props.setValidateOtp(true)
      // setNavigate(true);
      handleLoader(true);
      setTimeout(() => {
        navigate("/login",{ state: {token:"eyterty4356yt4e78u56tu"}});
      }, 3000);
    }
  };
  return (
    <>
      {loder ? (
        <Loder />
      ) : (
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          otpType="number"
          separator={<span>-</span>}
        />
      )}
    </>
  );
}

export default Otp;
