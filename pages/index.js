
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import HeroImage from '../components/home/MainImage'
import ServiceBox from '../components/home/ServiceBox'
import SliderWrapper from '../components/common/SliderWrapper'
import axios from 'axios'
import Section from '../components/common/Section'
import ReviewSection from '../components/home/ReviewSection'
const reviewData = [
  {
      name: '@Bilalhashmi29',
      msge: 'One Stop shop solution for all your need at your doorstep. staying focused on hygiene and sanatization <span class="company-name">@CoreCare</span>',
      image: "/image1.jpg"
  },
  {
      name: '@AdityaRPatro',
      msge: `Brilliant Staff <span class="company-name">@afzalSaiyed</span> and to the entire <span class="company-name">@CoreCare</span> Team for stepping up duting uncertain future`,
      image: '/image2.jpg'
  },
  {
      name: '@Bhanu82284032',
      msge: `<span class="company-name">@CoreCare</span> You guys rock did'nt expect such exceptional service even in this pandamic situation.`,
      image: "/image3.jpg"
  },
  {
      name: '@afzal_saiyed',
      msge: `<span class="company-name">@CoreCare</span> I Appreciate the precautianary measure taken by your servicemen. They were aware of aarogya setup importance..`,
      image: "/image4.jpg"

  },
  {
      name: '@sankeyBoy',
      msge: `Had a short circuit in the apartment Electrician visit scheduled in a flash now things are back to normal Thanks to <span class="company-name">@CoreCare</span>`,
      image: "/image5.jpg"

  },
  {
      name: '@dhanotiya30',
      msge: `Definately <span class="company-name">@CoreCare</span> is very helpful in this pendemic situation they are providing a hygenic service even during this pandamic situation`,
      image: "/image6.jpg"

  },
  {
      name: '@zaidshaikh129',
      msge: 'One Stop shop solution for all your need at your doorstep. staying focused on hygiene and sanatization <span class="company-name">@CoreCare</span>',
      image: "/image1.jpg"
  },
  {
      name: '@Arshadshaikh',
      msge: `Brilliant Staff <span class="company-name">@afzalSaiyed</span> and to the entire <span class="company-name">@CoreCare</span> Team for stepping up duting uncertain future`,
      image: "/image2.jpg"
  }
]
export const getStaticProps = async () => {
  const res = await axios.get('https://www.afzalsaiyed.corecare.in/')
  const res1 = await axios.get('https://www.afzalsaiyed.corecare.in/coupons/')
  const res2 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/3/cleaner/')
  const res3 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/2/carpenter/')
  const res4 = await axios.get('https://www.afzalsaiyed.corecare.in/subcategory/1/electrician/')


  return {
    props : {
      services: res.data,
      coupons: res1.data,
      cleaner: res2.data,
      carpenter: res3.data,
      electrician: res4.data,
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
            <ReviewSection mobileNav={mobileNav} data={reviewData}/>
            {console.log("Afgzal")}
      </Layout>
    </>
  )
}
export default Home