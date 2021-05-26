import Layout from '../../../components/blog/Layout';
import MetaComponent from '../../../components/common/MetaComponent';
import { frontend_base } from '../../../data/_variables'
import { Router, useRouter } from 'next/router'
export default function Home({ mobileNav }) {
    const router = useRouter()
  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <Layout mobileNav={mobileNav}>
        <div className="ui container">
          <h1>Post {router.query.slug} {router.query.id}</h1>
        </div>
      </Layout>
    </>
  )
}