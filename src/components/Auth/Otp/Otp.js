import React, { useState } from "react";
import OtpInput from "react-otp-input";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loder from "../../Loder/Loder";

function Otp({handleOtp,name,email}) {
  const [otp, setotp] = useState("");
  const [loder, handleLoader] = useState(false);
  console.log(email);
  const navigate = useNavigate();
  const handleChange = (x) => {
    setotp(x);
    if (x.length == 6) {
      console.log("OTP");
      console.log(x);
      handleOtp(true)
      // setNavigate(true);
      handleLoader(true);
      fetch("http://localhost:4000/users/validateotp", {
        crossDomain: true,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          otp: x
        }),
      }).then(async (response) => {
        let cachedPostData = await response.json();
        console.log("cachedPostData");
        console.log(cachedPostData);
        // return cachedPostData;
        if (cachedPostData.success === true) {
          // setotpModal(true);
          navigate("/login",{ state: {token:"eyterty4356yt4e78u56tu"}});
        }
      });
      // setTimeout(() => {
      // }, 3000);
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
