
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import HeroImage from '../components/home/MainImage'
import ServiceBox from '../components/home/ServiceBox'
export const getStaticProps = async () => {
  let res = await fetch('https://www.afzalsaiyed.corecare.in/')
  const data = await res.json()
  return {
    props : {services: data}
  }
}
const Home = ({ services, mobileNav }) => {
  return (
    <>
      <MetaComponent title="Home Page" description="Homepage" name="home Page" url="http://0.0.0.0:3000/"/>
      <Layout HeroImage={HeroImage} mobileNav={mobileNav}>
          <ServiceBox services={services} mobileNav={mobileNav}/>
      </Layout>
    </>
  )
}
export default Home