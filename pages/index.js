
import styles from '../styles/home/Home.module.scss'
import MetaComponent from '../components/common/MetaComponent'
import Layout from '../components/common/Layout'
const Home = () => {
  return (
    <>
      <MetaComponent title="Home Page" description="Homepage" name="home Page" url="http://0.0.0.0:3000/"/>
      <Layout>
          <h1 className="heavy">Afzal Saiyed</h1>
          <h1>Afzal Saiyed</h1>
          <h2>Afzal Saiyed</h2>
          <h3>Afzal Saiyed</h3>
          <h4>Afzal Saiyed</h4>
          <h5>Afzal Saiyed</h5>
          <h6>Afzal Saiyed</h6>

          <p>Normal Text</p>
          <span>Span</span>
          <a href="true">Link</a>
      </Layout>
    </>
  )
}
export default Home