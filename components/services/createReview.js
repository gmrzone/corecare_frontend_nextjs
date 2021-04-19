// import 'antd/dist/antd.css';
// import Rate  from 'antd/lib/rate';


import style from '../../styles/service/CreateReview.module.scss';
import { useState } from 'react';
// import { connect } from 'react-redux';
// import { createCategoryReview } from '../../../actions'
import { useContext } from 'react';
import { CategoryContext } from './context'
import { useForm } from 'react-hook-form'
const CreateReview = ({ parent, createCategoryReview, isReply }) => {
    const category = useContext(CategoryContext)
    const [star, setStar] = useState(5);
    const {handleSubmit, register,formState: { errors }} = useForm()
    // const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
    
    console.log(category)
    const handleRatingChange = value => {
        setStar(value)
    }
    const handleForm = (formValues) => {
        let formData = {
            star: star,
            // review: review,
            parent: parent,
        }
        if (parent){
            // createCategoryReview(formData, category, true)
            console.log(formData)
            console.log(formValues)
        }
        else{
            // createCategoryReview(formData, category)
            console.log(formData)
            console.log(formValues)
        }
        
        setReview("")
    }
    return (
        <form className={"ui reply form " + style.form} onSubmit={handleSubmit(handleForm)}>
            <div className={`field ${style.form_field} ${errors?.review && "error"}`}>
                <textarea placeholder="Enter your review" {...register('review', {required: {value: true, message: "Review cannot be blank"}})}/>
            </div>
            {!isReply ? <span className={style.rater}>
                {
                    <div class="ui star rating" data-rating="3" data-max-rating="5"></div>
                /* <Rate tooltips={desc} onChange={handleRatingChange} value={star}/>
                {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ""} */}
            </span> : ""}
            <div className="ui red labeled submit icon button" onClick={handleForm}>
            <i className="icon edit"></i> {isReply ? "Reply" : "Add Review"}
            </div>
        </form>
    )
}

// export default connect(null, { createCategoryReview })(CreateReview)

export default CreateReview