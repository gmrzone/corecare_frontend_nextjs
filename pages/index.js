
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import HeroImage from '../components/home/MainImage'
import ServiceBox from '../components/home/ServiceBox'
import SliderWrapper from '../components/common/SliderWrapper'
import Section from '../components/common/Section'
import ReviewSection from '../components/home/ReviewSection'
import { frontend_base } from '../data/_variables'
import reviewData from '../data/reviewData'
export const getStaticProps = async () => {
  const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
  const res = await fetch(BASE_URL)
  const data1 = await res.json()
  const res1 = await fetch(`${BASE_URL}coupons/`)
  const data2 = await res1.json()
  const res2 = await fetch(`${BASE_URL}subcategory/v2/3/cleaner/`)
  const data3 = await res2.json()
  const res3 = await fetch(`${BASE_URL}subcategory/v2/2/carpenter/`)
  const data4 = await res3.json()
  const res4 = await fetch(`${BASE_URL}subcategory/v2/1/electrician/`)
  const data5 = await res4.json()

  return {
    props : {
      services: data1,
      coupons: data2,
      cleaner: data3,
      carpenter: data4,
      electrician: data5,
    }
  }
}
const Home = ({ services, coupons,  mobileNav, cleaner, carpenter, electrician, review }) => {
  return (
    <>
      <MetaComponent title="Home Page" name="home Page" url={`${frontend_base}`}/>
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
            <ReviewSection mobileNav={mobileNav} data={reviewData}/>
      </Layout>
    </>
  )
}
export default Home