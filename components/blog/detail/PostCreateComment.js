import Card from "../Card";
import style from "../../../styles/blog/postDetail.module.scss";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import React from "react";
const PostCreateComment = () => {
    const { loginStatus, userData } = useContext(AuthContext)
    const { register, handleSubmit, setValue ,formState: { errors } } = useForm();
    const generateRandomNumber = (min=1, max=50) => {
        const num = Math.floor(Math.random() * (max - min + 1) + min)
        return num
    }
    const [securityQuestion, setSecurityQuestion] = useState({firstNum: null, secondNum: null, error: NaN})
    useEffect(() => {
        setSecurityQuestion(state => {
            return {...state, firstNum: generateRandomNumber(), secondNum: generateRandomNumber()}
        })
    }, [])
    useEffect(()=> {
        setValue('name', loginStatus ? userData.first_name + " " + userData.last_name : "", {shouldValidate: false})
        setValue('email', loginStatus ? userData.email : "", {shouldValidate: false})
    }, [loginStatus])

    const onSubmit = (data) => {
        const answer = securityQuestion.firstNum + securityQuestion.secondNum
        const formAnswer = parseInt(data.question)
        if (formAnswer !== answer){
            setSecurityQuestion(state => {
                return {...state, firstNum: generateRandomNumber(), secondNum: generateRandomNumber(), error: true}
            })
        }
        else{
            setSecurityQuestion(state => {
                return {...state, error: false}
            })
            console.log(data)
        }
    }
    const detectFormError = () => {
        if (errors.name || errors.email || errors.comment || errors.question){
            return true
        }
        return false
    }

  return (
    <Card>
      <div className={style.create_form_head}>
        <h3>Leave a Comment</h3>
        <span>Your Detail will not be published</span>
      </div>
      <form className={`ui form large ${style.comment_form}`} onSubmit={handleSubmit(onSubmit)}>
        <div className={`field ${errors.name && "error"}`}>
          <label>Fullname</label>
          <input type="text" placeholder="First Name" {...register('name', {required: {value: true, message: "Name cannot be empty."}, minLength: {value: 4, message: "Name should be greater then 4 char"}, maxLength: {value: 30, message: "Name cannot be greater then 30 char."}})}/>
        </div>
        <div className={`field ${errors.email && "error"}`}>
          <label>Email</label>
          <input type="email" placeholder="Email" {...register('email', {required: {value: true, message: "Please enter a email address"}, pattern: {value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, message: "Please Enter a valid Email Address"}})}/>
        </div>
        <div className={`field ${errors.comment && "error"}`}>
            <label>Comment</label>
            <textarea placeholder="Comment" {...register('comment', {required: {value: true, message: "Cannot post without a comment"}, maxLength: {value: 300, message: "Comment cannot contain more then 300 char"}, minLength: {value: 2, message: "Comment cannot be less then 2 Char"}})}/>
        </div>
        <div className={`field ${errors.question || securityQuestion.error ? "error" : "null"}`}>
          <label>What is {securityQuestion.firstNum} + {securityQuestion.secondNum} ?</label>
          <input type="text" autoComplete="off" placeholder="Security Question" {...register('question', {required: {value: true, message: "Please enter answer to security question."}, pattern: {value: /^[0-9]*$/, message: "Security answer cannot be anything other then number."}})}/>
        </div>
        {detectFormError() && <div className="ui red message">{errors.name?.message || errors.email?.message || errors.comment?.message || errors.question?.message}</div> ||
        securityQuestion.error === securityQuestion.error && <div className={`ui red message ${securityQuestion.error ? "red" : "green"}`}>{securityQuestion.error ? "Wrong Answer please try again." : "Comment Created sucessfully."}</div>}
        <div className={style.form_action}>
            <button className="ui secondary button" type="submit">
                Comment
            </button>
        </div>
      </form>
    </Card>
  );
};

export default PostCreateComment;
