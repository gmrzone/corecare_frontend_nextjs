import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables'
export default function Home({ mobileNav }) {
  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <Layout mobileNav={mobileNav}>
        <div className="ui container">
          <h1>Post List</h1>
        </div>
      </Layout>
    </>
  )
}
