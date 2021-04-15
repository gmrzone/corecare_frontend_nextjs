
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import HeroImage from '../components/home/MainImage'
import ServiceBox from '../components/home/ServiceBox'
import SliderWrapper from '../components/common/SliderWrapper'
import axios from 'axios'
import Section from '../components/common/Section'
import ReviewSection from '../components/home/ReviewSection'
export const getStaticProps = async () => {
  const res = await axios.get('https://www.afzalsaiyed.corecare.in/')
  const res1 = await axios.get('https://www.afzalsaiyed.corecare.in/coupons/')
  const res2 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/3/cleaner/')
  const res3 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/2/carpenter/')
  const res4 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/1/electrician/')
  const res5 = await axios.get('http://127.0.0.1:3000/api/reviews/')


  return {
    props : {
      services: res.data,
      coupons: res1.data,
      cleaner: res2.data,
      carpenter: res3.data,
      electrician: res4.data,
      review: res5.data
    }
  }
}

const Home = ({ services, coupons,  mobileNav, cleaner, carpenter, electrician, review }) => {
  return (
    <>
      <MetaComponent title="Home Page" description="Homepage" name="home Page" url="http://0.0.0.0:3000/"/>
      <Layout HeroImage={HeroImage} mobileNav={mobileNav}>
          <ServiceBox services={services} mobileNav={mobileNav}/>
            <div className="section__first">
                <Section title="Best Offers">
                  <SliderWrapper data={coupons} image={false} mobileNav={mobileNav}/>
                </Section>
            </div>
            <Section title="Cleaning Services">
              <SliderWrapper data={cleaner.filter(x => x.slug !== 'cleaner-consultation')} image={true} mobileNav={mobileNav}/>
            </Section>
            <Section title="Carpentry Services">
              <SliderWrapper data={carpenter.filter(x => x.slug !== "carpenter-consultation")} image={true} mobileNav={mobileNav}/>
            </Section>
            <Section title="Electrician Services">
              <SliderWrapper data={electrician.filter(x => x.slug !== "electrician-consultation")} image={true} mobileNav={mobileNav}/>
            </Section>
            <ReviewSection mobileNav={mobileNav} data={review}/>
      </Layout>
    </>
  )
}
export default Home