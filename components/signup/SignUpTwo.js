import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
export const SignUpPageTwo = ({
  signUpSettings,
  setSignUpHeader,
  signUpData,
}) => {
  // const [otpField, setOtpField] = useState("")
  // const [error, setError] = useState({error: false, message: ""})
  const [otpError, setOtpError] = useState({ error: false, message: null });
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setSignUpHeader({
      title: "Enter 6 Digit OTP",
      subtitle: "Make sure both password are same",
    });

    return () => {
      setSignUpHeader({ title: "", subtitle: "" });
    };
  }, [setSignUpHeader]);
  const onSubmit = (formValues) => {
    setLoading(true);
    formValues.number = signUpData.number;
    console.log(formValues);
  };
  const goBack = () => {
    signUpSettings((state) => {
      return { ...state, otpSend: false, otp: null };
    });
  };
  // const validateOtp = value => {
  //     if (value){
  //         if (value.length === 6){
  //             if (value.match(/[a-zA-Z ]/)){
  //                 return "Invalid Otp"
  //             }
  //             else{
  //                 return undefined
  //             }

  //         }
  //         else{
  //             return "Invalid Otp"
  //         }
  //     }
  //     else{
  //         return "Required"
  //     }
  // }
  // const validateForm = (formValues) => {
  //     const { password1, password2} = formValues
  //     let error = {}
  //     if (password1 !== password2){
  //         error.password2 = "Both Password Dont Match"
  //     }
  //     return error
  // }
  return (
    <form className="ui form" onSubmit={formProps.handleSubmit}>
      <div className={`field ${meta.touched && meta.error && "error"}`}>
        <label>OTP</label>
        <input
          type="text"
          placeholder="Enter Six Digit OTP"
          {...register("entered_otp", {
            maxLength: {
              value: 6,
              message: "OTP cannot be greater then 6 Digits",
            },
            minLength: {
              value: 6,
              message: "OTP cannot be less then 6 Digits",
            },
            pattern: {
              value: /\d{6}$/,
              message:
                "Invalid OTP format please make sure you enter a valid OTP.",
            },
          })}
        />
      </div>
      <div className={`field ${meta.touched && meta.error && "error"}`}>
        <label>Password</label>
        <input type="password" placeholder="Password" {...register('password1', {minLength: {value: 8, message: "Password cannot be less then 8 characters"}})} />
      </div>
      <div className={`field ${meta.touched && meta.error && "error"}`}>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" {...register('password2', {minLength: {value: 8, message: "Password cannot be less then 8 characters"}})}/>
        {(meta.error && meta.touched && meta.error !== "Required") ||
        otpError.error ? (
          <div className="ui tiny message red">
            {meta.error || otpError.message}
          </div>
        ) : (
          ""
        )}
      </div>
      <div style={{ textAlign: "right" }}>
        <button className="ui labeled icon button secondary" onClick={goBack}>
          <i className="left arrow icon"></i>
          Go Back
        </button>
        <button
          className={`ui positive right labeled icon button ${
            loading && "loading"
          }`}
          type="submit"
        >
          Submit
          <i className="checkmark icon"></i>
        </button>
      </div>
    </form>
  );
};

export default SignUpPageTwo
