
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import HeroImage from '../components/home/MainImage'
import ServiceBox from '../components/home/ServiceBox'
import SliderWrapper from '../components/common/SliderWrapper'
import axios from 'axios'
import Section from '../components/common/Section'
export const getStaticProps = async () => {
  const res = await axios.get('https://www.afzalsaiyed.corecare.in/')
  const res1 = await axios.get('https://www.afzalsaiyed.corecare.in/coupons/')
  return {
    props : {
      services: res.data,
      coupons: res1.data
    }
  }
}

const Home = ({ services, coupons,  mobileNav }) => {
  return (
    <>
      <MetaComponent title="Home Page" description="Homepage" name="home Page" url="http://0.0.0.0:3000/"/>
      <Layout HeroImage={HeroImage} mobileNav={mobileNav}>
          <ServiceBox services={services} mobileNav={mobileNav}/>
            <div className="section__first">
              <div className="section__wrapper">
                <Section title="Best Offers">
                  <SliderWrapper data={coupons} image={false} mobileNav={mobileNav}/>
                </Section>
              </div>
            </div>
            
      </Layout>
    </>
  )
}
export default Home