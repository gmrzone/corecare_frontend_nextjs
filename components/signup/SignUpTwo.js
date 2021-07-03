import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import BackendApi from '../../data/backendApi'
export const SignUpPageTwo = ({
  signUpSettings,
  setSignUpHeader,
  signUpData,
  csrfToken, 
  mutateCsrf
}) => {

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
    setValue('entered_otp', signUpData.otp)
    return () => {
      setSignUpHeader({ title: "", subtitle: "" });
    };
  }, [setSignUpHeader, signUpData, setValue]);

  
  const onSubmit = (formValues) => {
    setLoading(true);
    BackendApi.post(`account/create_user_account/verify/${signUpData.number}/`, formValues, {headers: {'X-CSRFToken': csrfToken}})
    .then(response => {
      if (response.data.status === "ok"){
        signUpSettings(state => {
          return {...state, otpVerified: true, password: formValues.password1}
        })
      }
      else {
        console.log(response)
      }
      setLoading(false)
      mutateCsrf()
    })
    .catch(e => {
      if (e.response.data.status === "error"){
        setOtpError({error: true, message: e.response.data.msg})
      }
      else {
        console.log(e)
      }
      setLoading(false)
      mutateCsrf()
    })

  };

  const goBack = () => {
    signUpSettings((state) => {
      return { ...state, otpSend: false, otp: null };
    });
  };

  return (
    <form className="ui form large" onSubmit={handleSubmit(onSubmit)}>
      <div className={`field ${errors?.entered_otp || otpError.error ? "error" : ""}`}>
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
      <div className={`field ${errors?.password1 || otpError.error ? "error" : ""}`}>
        <label>Password</label>
        <input type="password" placeholder="Password" {...register('password1', {minLength: {value: 8, message: "Password cannot be less then 8 characters"}})} />
      </div>
      <div className={`field ${errors?.password2 || otpError.error ? "error" : ""}`}>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" {...register('password2', {minLength: {value: 8, message: "Password cannot be less then 8 characters"}})}/>
        {errors?.entered_otp || errors?.password1 || errors?.password2 || otpError?.error ? (
          <div className="ui tiny message red">
            {errors?.entered_otp?.message || errors?.password1?.message || errors?.password2?.message || otpError?.message}
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
