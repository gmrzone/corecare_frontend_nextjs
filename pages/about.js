import style from '../styles/about/About.module.scss'
import AboutSection from '../components/about/AboutSection';
import AboutStats from '../components/about/AboutStats';
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
const About = () => {
    return(
        <>  
            <MetaComponent title="About Page" description="Aboutpage" name="about Page" url="http://0.0.0.0:3000/about" />
            <Layout>
                <div className={style.about_container__12364}>
                    <div className={style.header_section__47942d}>
                        <h1>About Us</h1>
                    </div>
                    <div className={"ui container " + style.about_container__12365}>
                        <AboutSection>
                            <h2>Who We Are</h2>
                            <p>CoreCare was launched in November 2019. It is the largest home services platform in Asia, with presence in India, UAE, Singapore and Australia. The platform helps customers book reliable home services like beauty services, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting etc. The company&#x27;s vision is to empower millions of service professionals across the world to deliver services at home like never seen before. The company partners with tens of thousands of service professionals, helping them with  with training, credit, product procurement, insurance, technology etc.</p>
                        </AboutSection>
                        <AboutSection>
                            <AboutStats />
                        </AboutSection>
                        <AboutSection>
                            <h2>How we do it.</h2>
                            <p>CoreCare provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. All the professionals, though experienced and skilled, undergo intensive training modules before being allowed to list their services on the platform. Once on the platform, our match-making algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date.</p>
                            <p>Only 1 in 10 service providers who sign up with us is allowed to list their services.</p>
                        </AboutSection>
                        <AboutSection>
                            <h2>Our Story So Far</h2>
                            <p>29 cities in India: Agra, Ahmedabad, Bangalore, Bhopal, Bhubaneswar, Chandigarh Tricity, Chennai, Coimbatore, Delhi NCR, Guwahati, Hyderabad, Indore, Jaipur, Kanpur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Nashik, Patna, Pune, Surat, Vadodara, Varanasi, Vijayawada, Visakhapatnam, raipur</p>
                        </AboutSection>
                        <AboutSection>
                            <h2>Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.</h2>
                            <span>For general queries, contact: <a href="mailto:info@corecare.in">info@corecare.in</a></span> | <span>For Media queries, contact: <a href="mailto:media@corecare.in">media@corecare.in</a></span>
                            <p>You could be a part of our journey <br /> Interested?</p>
                            <button className={"ui secondary " + style.button + " " + style.btn}>
                                Apply Now
                            </button>
                        </AboutSection>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About