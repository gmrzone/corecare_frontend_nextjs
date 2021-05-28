import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables';
import CreateForm from '../../components/blog/CreateForm'
import style from '../../styles/blog/createBlog.module.scss'
export default function Home({ mobileNav }) {
  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <Layout mobileNav={mobileNav}>
        <div className={`ui container ${style.blog_create}`}>
          {/* <h1>Post Create</h1> */}
          <CreateForm />
        </div>
      </Layout>
    </>
  )
}
