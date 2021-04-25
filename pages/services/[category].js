import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/common/Layout'
import MetaComponent from '../../components/common/MetaComponent'
import { frontend_base } from '../../data/_variables'
import useSWR from 'swr'
// Components
import HeroImage from '../../components/services/HeroImage';
import ServiceInfoBox from '../../components/services/ServiceInfoBox'
import BigServiceTab from '../../components/services/BigServiceTab'
import ServiceCallToAction from '../../components/services/ServiceCallToAction'
import StatsTable from '../../components/services/StatsTable';
import ServiceList from '../../components/services/ServiceList'

// utils
import { ServiceInfoBoxContent } from '../../components/services/utils';
import { serviceInfoStatistic } from '../../components/services/utils';
import { BigServiceBox } from '../../components/services/utils';
import { accordianItem } from '../../components/services/utils';
import CategoryChangeModal from '../../components/services/ServiceList/categoryChangeModel'
import axios from '../../data/backendApi'
import { CategoryModalProvider } from '../../context/categoryChangeModal'
const MainImagebullets = [
    'Doorstep repair within 90 mins',
    'Protection against damage upto INR 10,000',
    '30 Days posts-service guarantee'
]

export const getStaticPaths = async () => {
    const BASE_URL = process.env['API_BASE_URL']
    const res1 = await fetch(BASE_URL)
    const data = await res1.json()
    const paths = data.map(x => {
        return {params: {category: x.slug}}
    })
    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
    const res1 = await fetch(`${BASE_URL}get_services/${params.category}/`)
    const data = await res1.json()
    const res2 = await fetch(`${BASE_URL}get_employee/${params.category}/`)
    const employees = await res2.json()

    const subcategories = []
    const services = {}
    for (let i of data){
        const temp = {}
        services[i.slug] = i.services
        temp.id = i.id
        temp.name = i.name
        temp.slug = i.slug
        subcategories.push(temp)
    }
    return {
        props: {
            services: services,
            subcategories: subcategories,
            employees
            
        },
        revalidate: 86400
    }
}

// const BigServiceBox = {
//     title: 'Electricians in Mumbai',
//     desc: 'In this age and time, life is indeed impossible without electricity. It seems difficult to survive even through a power cut of only 15 minutes. Any small breakdown or malfunction can bring our entire routine to a standstill. Life in a place like Mumbai doesn’t really give you time to get such problems fixed. Searching for a reliable and licensed electrician in Mumbai is a task in itself. At the same time, any electric faults can’t be left unattended. f you find yourself stuck in such a situation, don’t worry. <strong>CoreCare brings you the best electricians at home in Mumbai, NaviMumbai and Pune.',
// }
const Services = ({ services, mobileNav, employees, subcategories }) => {
    // Service List states (2 state for transition effect)
    const [serviceListActive, setServiceListActive] = useState(false);
    const [serviceListVisible, setServiceListVisible] = useState(false)

    // Category Change Model and refs
    const [categoryChangeModelActive, setCategoryChangeModelActive] = useState(false)
    const [modelHeaderText, setModelHeaderText] = useState("Category Changed From")
    const [replacementCartItem, setReplacementCartItem] = useState(null)
    const incrementReplacedService = useRef()

    const ServiceListRef = useRef()
    const router = useRouter()
    const service_category = router.query['category']
    const {data , error} = useSWR(`https://www.afzalsaiyed.corecare.in/get_reviews/${service_category}/`, (...args) => axios.get(...args).then(response => response.data))
    // search_param will only be defined when user uses search box on main page and redirect to service page
    // seacrh param will be passed as prop to ServiceInfoBox component to trigger an click event on it if search param is defined to open ServiceList when search
    // it will also be passed to ServiceList component and then SubcategoryContent component to scroll in to view searched service category
    const search_param = router.query.afzal
    // Cleanup servicelist state before unmounting service page using useEffect()
    useEffect(() => {
        return () => {
            setServiceListActive(false)
        }
    }, [search_param])

    const call2ActioncustomerClicked = () => {
        toggleServiceList()
    }
    const call2ActionemployeeClicked = () => {
        console.log('Employee')
    }
    const toggleServiceList = () => {
        
        if (!serviceListVisible){
            setServiceListActive(!serviceListActive)
            setTimeout(() => setServiceListVisible(!serviceListVisible), 50)
        }
        else{
            setServiceListVisible(!serviceListVisible)
            setTimeout(() => setServiceListActive(!setServiceListActive), 400)
        }
    }
    const renderImage = () => {
        switch(service_category){
            case 'electrician':
                return "/slider_image2.jpg"
            case "cleaner":
                return "/slider_image3.jpg"
            case 'pest-control':
                return "/slider_image1.jpg"
            default:
                return "/main-page-new.jpg"
        }
    }
    const renderTitle = () => {
        switch(service_category){
            case 'ac-service-repair':
                return 'AC Expert'
            default:
                return service_category[0].toUpperCase() + service_category.slice(1)
        }

    }
    const renderServiceInfoBoxContent = () => {
            switch (service_category){
                case 'pest-control':
                    return ServiceInfoBoxContent.electrician
                case 'ac-service-repair':
                    return ServiceInfoBoxContent.ac
                case 'appliance-repair':
                    return ServiceInfoBoxContent.electrician
                default:
                    return ServiceInfoBoxContent[service_category]
            }
    }
    const renderBigServiceBoxText = () => {
        switch (service_category){
            case 'pest-control':
                return BigServiceBox.electrician
            case 'ac-service-repair':
                return BigServiceBox.ac
            case 'appliance-repair':
                return BigServiceBox.electrician
            default:
                return BigServiceBox[service_category]
        }
    }
    const renderStatictic = () => {
        switch (service_category){
            case 'pest-control':
                return serviceInfoStatistic.electrician
            case 'ac-service-repair':
                return serviceInfoStatistic.ac
            case 'appliance-repair':
                return ServiceInfoBoxContent.electrician
            default:
                return serviceInfoStatistic[service_category]
        }
    }
    const renderedStats = renderStatictic()

    const closeCategoryModel = () => {
        setCategoryChangeModelActive(false)
    }
    const openCategoryModel = () => {
        setCategoryChangeModelActive(true)
        
    }

    const serviceListProps = {category: service_category, 
                              active: serviceListVisible, 
                              setActive: toggleServiceList, 
                              services: services, 
                              searchParam:search_param, 
                              subcategorys: subcategories}

    const categoryModalProps = {modelActive: categoryChangeModelActive,
                                closeModel: closeCategoryModel,
                                header: modelHeaderText, 
                                category: service_category, 
                                replacementItem: replacementCartItem, 
                                incrementReplacedService: incrementReplacedService.current}
    return (
        <>  
            <MetaComponent title={renderTitle()} description={`${renderTitle()} Page`} name={`${renderTitle()} Page`} url={`${frontend_base}services/${service_category}`}/>
            <CategoryModalProvider openCategoryModal={{ openCategoryModel , setModelHeaderText , setReplacementCartItem, incrementReplacedService}}>
                <Layout HeroImage={HeroImage} mobileNav={mobileNav} heroProps={{mainTitle: `Get Professional ${renderTitle()}`, src: renderImage(), bullets: MainImagebullets}} ServiceListModel={ServiceList} serviceListProps={serviceListProps} CategoryChangeModal={CategoryChangeModal} categoryChangeProps={categoryModalProps}>
                    {/* {serviceListActive ? <ServiceList category={service_category} active={serviceListVisible} setActive={toggleServiceList} reference={ServiceListRef} searchParam={search_param} services={services}/> : ""} */}
                    {/* <HeroImage mainTitle={`Get Professional ${renderTitle()}`} src={renderImage()} bullets={MainImagebullets}/> */}
                    <ServiceInfoBox title={`Need an ${renderTitle()} for`} content={renderServiceInfoBoxContent()} rating={renderedStats.rating} ratingCount={renderedStats.ratingCount} bookingDone={renderedStats.bookingDone} onClick={call2ActioncustomerClicked} searchParam={search_param} mobileNav={mobileNav}/>
                    <BigServiceTab serviceCategory={renderTitle()} accordianItem={accordianItem} about={renderBigServiceBoxText()} category={service_category} mobileNav={mobileNav} employees={employees} categoryReviews={data}/>
                    <ServiceCallToAction title={`Looking to hire Professionals ${renderTitle()}`} buttonText="Give Requirements" desc="Tell us your requirements and get custom quotes with profiles within 24 hours from upto 5 interested professionals." onClick={call2ActioncustomerClicked}/>
                    <ServiceCallToAction title="Are you an Expert looking for Customers?" buttonText="Join Now" desc="" onClick={call2ActionemployeeClicked}/>
                    <StatsTable />
                </Layout>
            </CategoryModalProvider>
        </>

    )
}

export default Services