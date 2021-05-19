import style from '../../styles/service/BigServiceTab.module.scss'
// import { connect } from 'react-redux';
import { useRef, useContext } from 'react'
// import { fetchEmployees, fetchCategoryReviews } from '../../../actions'
import Link from 'next/link';
import Image from 'next/image';
import Accordian from '../common/Accordian';
import { BASE_URL } from '../../data/_variables';
import SingleReview from './SingleReview';
import ReviewReplyWrapper from './reviewReplyWrapper';
import CreateReview from './createReview';
import { CategoryContext } from './context'
import { AuthContext } from '../../context/AuthContext'

const BigServiceTab = (props) => {
   
    const { category } = props
    const { loginStatus: authenticated } = useContext(AuthContext)
    const scrolableRef = useRef()
    // const {categoryReviews, error} = useSWR(`get_reviews/${category}/`, fetcher)
    // useEffect(() => {
    //     fetchEmployees(category)
    //     fetchCategoryReviews(category)
    // }, [fetchEmployees, category,fetchCategoryReviews])
    const activateTab = (e) => {
        Array.from(e.target.parentNode.children).forEach(element => {
            element.classList.remove(style.active)
        })
        
        e.target.classList.add(style.active)
        const active_content = document.getElementById(e.target.dataset.id)
        Array.from(active_content.parentNode.children).forEach(x => x.classList.remove(style.activecontent))
        active_content.classList.add(style.activecontent)
    }
    const slideLeft = () => {

    }
    const slideRight = () => {

    }
    const RenderMobileHandlers = () => {
        if (!props.mobileNav){
            return null
        }

        return(
            <>
                <i className="angle left icon" style={{position: 'absolute', left: '-5px', zIndex:"10",  bottom: '8px', fontSize: '20px'}} onClick={slideLeft}/>
                <i className="angle right icon" style={{position: 'absolute', right: '0', zIndex:"10" ,  bottom: '8px', fontSize: '20px'}} onClick={slideRight}/>
            </>
        )
    }
    const renderAddress = (employee) => {
        let fullAddress  = ""
        if (employee.address_1){
            fullAddress += employee.address_1
        }
        if (employee.address_2){
            fullAddress += " "
            fullAddress += employee.address_2
        }
        if (employee.city){
            fullAddress += " "
            fullAddress += employee.city
        }
        if (employee.state){
            fullAddress += " "
            fullAddress += employee.state
        }
        if (employee.pincode){
            fullAddress += " "
            fullAddress += employee.pincode
        }
        return fullAddress
        
    }
    const renderEmployees = props?.employees?.map(x => {
        return(
            <div className={style.employee_item} key={x.id}>
                <div className={style.employee_profile_image}>
                    {/* <img src={BASE_URL + x.photo} alt="employee-profile"/> */}
                    <Image src={x.photo} alt="employee-profile" width="65" height="65" className={style.img}/>
                </div>
                <div className={style.employee_profile_detail}>
                    <div className={style.employee_name}><strong>{`@${x.username}` || x.number || x.email}</strong></div>
                    <div className={style.employee_address}>{renderAddress(x)}</div>
                </div>
            </div>
        )
    })
    const renderReviewReply = (reply) => {
        return reply.map(x => {
            let reply_data;
            props.categoryReviews.forEach(y => {
                if (x === y.id){
                    reply_data = Object.create(y)
                }
            })
            return reply_data
        })
        .map(x => {
            return (
                <ReviewReplyWrapper key={x.id}>
                    <CategoryContext.Provider value={category}>
                        <SingleReview key={x.id} review={x} isReply={true} BASEURL={BASE_URL} category={category} authenticated={authenticated}/>
                    </CategoryContext.Provider>
                </ReviewReplyWrapper>
            )
        })
    }
    const renderReviews = props?.categoryReviews?.map(x => {
        if (!x.parent){
            return(
                <CategoryContext.Provider value={category} key={x.id}>
                    <SingleReview key={x.id} review={x} isReply={false} BASEURL={BASE_URL} renderReviewReply={renderReviewReply} authenticated={authenticated}/>
                </CategoryContext.Provider>
            )
        }
        else {
            return null
        }

    })
    
    
    return(
        <div className="ui container">
          <div className={style.slider_container}>
                    {RenderMobileHandlers()}
                    <div className={style.big_service_tabs} ref={scrolableRef}>
                        <div className={style.tab_item + " " + style.active} onClick={activateTab} data-id="how-it-work">
                            How It Works?
                        </div>
                        <div className={style.tab_item} onClick={activateTab} data-id={props.serviceCategory.toLowerCase()}>
                            {props.serviceCategory}s
                        </div>
                        <div className={style.tab_item} onClick={activateTab} data-id="customer-review">
                            Custumer Reviews
                        </div>
                        <div className={style.tab_item} onClick={activateTab} data-id="faqs">
                            FAQS
                        </div>
                        <div className={style.tab_item} onClick={activateTab} data-id="about">
                            About {props.serviceCategory}
                        </div>
                </div>
            </div>
            <div className="service-tab-contents">
                <div className={style.big_service_content + " " + style.activecontent} id="how-it-work">
                    <div className={style.content_container_one}>
                        <h2 className="content-title">How it Works?</h2>
                        <div className={style.content_item}>
                            {/* <img src="/how-it-work1.svg" alt="service-icon" className={style.content_image} /> */}
                            <Image src="/how-it-work1.svg" alt="service-icon" className={style.content_image} width="45" height="45"/>
                            <h4>Choose the type of service</h4>
                        </div>
                        <div className={style.content_item}>
                            {/* <img src="/how-it-work2.svg" alt="service-icon" className={style.content_image} /> */}
                            <Image src="/how-it-work2.svg" alt="service-icon" className={style.content_image} width="45" height="45"/>
                            <h4>Choose the time-slot</h4>
                        </div>
                        <div className={style.content_item}>
                            {/* <img src="/how-it-work3.svg" alt="service-icon" className={style.content_image} /> */}
                            <Image src="/how-it-work3.svg" alt="service-icon" className={style.content_image} width="45" height="45"/>
                            <h4>Hassle-free service</h4>
                        </div>
                    </div>
                </div>
                <div className={style.big_service_content} id={props.serviceCategory.toLowerCase()}>
                    <div className={style.content_container_two}>
                        <h2 className={style.content_title}>{props.serviceCategory}s</h2>
                        <div className={style.employee_list_container}>
                            {renderEmployees}
                        </div>
                    </div>
                </div>
                <div className={style.big_service_content} id="customer-review">
                    <div className="content-container-three">
                        <div className="ui comments">
                            {/* <h2 className={`ui dividing header ${style.content_title}`}>Customers Reviews</h2> */}
                            <h2 className="content-title">Reviews</h2>
                            <div>{renderReviews}</div>
                        </div>
                        <div className="create-review">
                            {authenticated ? <CategoryContext.Provider value={category}>
                                <CreateReview />
                            </CategoryContext.Provider> : <h4 style={{textAlign: 'center'}}><Link href="/login"><a>Login</a></Link> to add reviews or reply to reviews</h4>}
                        </div>
                    </div>
                </div>
                <div className={style.big_service_content} id="faqs">
                    <div className="content-container-four">
                        <h2 className="content-title">Faqs</h2>
                        <div>
                            <Accordian items={props.accordianItem}/>
                        </div>
                    </div>
                </div>
                <div className={style.big_service_content} id="about">
                    <div className="">
                        <h2 className="content-title">About {props.serviceCategory}</h2>
                        <div>
                            <h3>{props.about.title}</h3>
                            <p dangerouslySetInnerHTML={{__html: props.about.desc}}></p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}


export default BigServiceTab

