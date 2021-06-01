import style from "../../../styles/blog/postDetail.module.scss";
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { CsrfContext } from '../../../context/CsrfTokenContext';
import DjangoBackend from '../../../data/backendApi';
const CommentForm = ({ year, month, day, slug, isReply, parent_id }) => {
    const { loginStatus, userData } = useContext(AuthContext)
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const generateRandomNumber = (min=1, max=50) => {
        const num = Math.floor(Math.random() * (max - min + 1) + min)
        return num
    }

    const [securityQuestion, setSecurityQuestion] = useState({firstNum: null, secondNum: null, error: NaN})
    useEffect(() => {
        setSecurityQuestion(state => {
            return {...state, firstNum: generateRandomNumber(), secondNum: generateRandomNumber()}
        })
        setValue('name', loginStatus ? userData.first_name + " " + userData.last_name : "")
        setValue('email', loginStatus ? userData.email : "")
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

            let url = `blog/create_comment/${year}/${month}/${day}/${slug}/`
            const headers = {headers: {'X-CSRFToken': csrfToken}}
            const formData = new FormData()
            if (isReply){
              url += `${parent_id}/`
            }
            formData.append('name', data.name)
            formData.append('email', data.email)
            formData.append('comment', data.comment)

            DjangoBackend.post(url, formData, headers)
            .then(response => {
              if (response.data.status === "ok"){
                  setSecurityQuestion(state => {
                    return {...state, error: false}
                  })
              }
            })
            .catch(e => {
              setSecurityQuestion(state => {
                return {...state, error: true}
              })
            })

        }
    }

    const detectFormError = () => {
        if (errors?.name || errors?.email || errors?.comment || errors?.question){
            return true
        }
        return false
    }
    return (
        <form className={`ui form large ${isReply && "reply"} ${style.comment_form}`} onSubmit={handleSubmit(onSubmit)}>
        {!loginStatus && (
          <>
            <div className={`field ${errors.name && "error"}`}>
              <label>Fullname</label>
              <input type="text" placeholder="Name" {...register('name', {required: {value: true, message: "Name cannot be empty."}, minLength: {value: 4, message: "Name should be greater then 4 char"}, maxLength: {value: 30, message: "Name cannot be greater then 30 char."}})}/>
            </div>
            <div className={`field ${errors.email && "error"}`}>
              <label>Email</label>
              <input type="email" placeholder="Email" {...register('email', {required: {value: true, message: "Please enter a email address"}, pattern: {value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, message: "Please Enter a valid Email Address"}})}/>
            </div>
        </>
        )}
        <div className={`field ${errors.comment && "error"}`}>
            {!isReply && <label>Comment</label>}
            <textarea placeholder={isReply ? "Reply" : "Comment"} {...register('comment', {required: {value: true, message: "Cannot post without a comment"}, maxLength: {value: 300, message: "Comment cannot contain more then 300 char"}, minLength: {value: 2, message: "Comment cannot be less then 2 Char"}})}/>
        </div>
        <div className={`field ${errors.question || securityQuestion.error ? "error" : "null"}`}>
          <label>What is {securityQuestion.firstNum} + {securityQuestion.secondNum} ?</label>
          <input type="text" autoComplete="off" placeholder="Security Question" {...register('question', {required: {value: true, message: "Please enter answer to security question."}, pattern: {value: /^[0-9]*$/, message: "Security answer cannot be anything other then number."}})}/>
        </div>
        {detectFormError() && <div className="ui red message">{errors.name?.message || errors.email?.message || errors.comment?.message || errors.question?.message}</div> ||
        securityQuestion.error === securityQuestion.error && <div className={`ui red message ${securityQuestion.error ? "red" : "green"}`}>{securityQuestion.error ? "Wrong Answer please try again." : "Comment Created sucessfully."}</div>}
        <div className={style.form_action}>
            <button className="ui secondary button" type="submit">
                {isReply ? "Reply" :"Comment"}
            </button>
        </div>
      </form>
    )
}

export default CommentForm