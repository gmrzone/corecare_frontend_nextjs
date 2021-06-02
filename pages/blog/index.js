import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables';
import style from '../../styles/blog/index.module.scss';
import { PostCreateModalProvider } from '../../context/PostCreateModalContext'

export default function Home({ mobileNav }) {

  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <PostCreateModalProvider>
        <Layout mobileNav={mobileNav}>
          <div className={`ui container ${style.container}`}>
          {/* <button className={`negative ui button ${textEditorLoading && "loading"}`}  onClick={() => setCreateModalActive(true)}>Create Post</button> */}
            <h1>Post List</h1>
          </div>
        </Layout>
      </PostCreateModalProvider>
    </>
  )
}
