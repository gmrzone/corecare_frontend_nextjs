import style from '../styles/contact/Contact.module.scss'
import { data } from '../components/contact/contactData'
import ContactForm from '../components/contact/ContactForm';
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
import { frontend_base } from '../data/_variables'
const Contact = ({ mobileNav }) => {
    const renderAreas = data.map((x, i) => {
        return (
            <div className={style.serving_in__item} key={i}>
                <h2>{x.name}</h2>
                <p>{x.address}</p>
            </div>
        )
    })

    
    return(
        <>
        <MetaComponent title="Contact us" description="Corecare Contact us page" name="contact us" url={`${frontend_base}contact`} />
        <Layout mobileNav={mobileNav}>
            <div className={style.contact_container__main}>
                <div className={style.header_section__47942d}>
                    <h1>Contact Us</h1>
                </div>
                <div className={"ui container " + style.about_container__12365}>
                    <div className={style.contact_section}>
                        <h2>Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.</h2>
                        <span>For general queries, contact: <a href="mailto:info@corecare.in">info@corecare.in</a></span> | <span>For Media queries, contact: <a href="mailto:media@corecare.in">media@corecare.in</a></span>
                    </div>
                    <div className={style.contact_section}>
                        <div className={style.serving_in__containers}>
                            {renderAreas}
                        </div>
                    </div>
                    <div className="ui divider" style={{marginBottom: '48px'}}></div>
                    <div className={style.contact_section + " " + style.contact_section_form}>
                        <h2 className={style.form_title}>Get in Touch</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Contact