// import 'antd/dist/antd.css';
// import Rate  from 'antd/lib/rate';

import StarRating from '../../components/common/StarRating'
import style from '../../styles/service/CreateReview.module.scss';
import { useState, useContext } from 'react';
import axios from '../../data/backendApi'
import reviewContext from '../../context/ReviewContext'
// import { connect } from 'react-redux';
// import { createCategoryReview } from '../../../actions'
import { CategoryContext } from './context'
import { useForm } from 'react-hook-form'
import { CsrfContext } from '../../context/CsrfTokenContext'
const CreateReview = ({ parent, isReply }) => {
    const { mutateReviews , data } = useContext(reviewContext)
    const { csrfToken, mutateCsrf } = useContext(CsrfContext)
    const category = useContext(CategoryContext)
    const [star, setStar] = useState(5);
    const {handleSubmit, register,formState: { errors }} = useForm()
    // const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
    
    const createReview = (formData, category, isReply) => {
        axios.post(`create_review/${category}/new/`, formData, {headers: {'X-CSRFToken': csrfToken}}).then(response => {
            if (isReply){
                mutateReviews(response.data, false)
            }
            else {
                mutateReviews([...data, response.data], false)
                
            }
            mutateCsrf()
        })
    }
    const handleForm = (formValues) => {
        // let formData = {
        //     star: star,
        //     review: formValues.review,
        //     parent: parent,
        // }
        const formData = new FormData()
        formData.append('star', star)
        formData.append('review', formValues.review)
        if (parent){
            formData.append('parent', parent)
            createReview(formData, category, true)
        }
        else{
            // createCategoryReview(formData, category)
            createReview(formData, category)

        }
        
        
    }
    return (
        <form className={"ui reply form " + style.form} onSubmit={handleSubmit(handleForm)}>
            <div className={`field ${style.form_field} ${errors?.review && "error"}`}>
                <textarea placeholder="Enter your review" {...register('review', {required: {value: true, message: "Review cannot be blank"}})}/>
            </div>
            {!isReply ? <span className={style.rater}>
                {
                <StarRating rating={star} size="huge" setStar={setStar} dynamic={true}/>}
            </span> : ""}
                <button className="ui secondary button" type="submit">
                    {isReply ? "Reply" : "Add Review"}
                </button>
        </form>
    )
}

// export default connect(null, { createCategoryReview })(CreateReview)

export default CreateReview