import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables';
import style from '../../styles/blog/index.module.scss';
import { PostCreateModalProvider } from '../../context/PostCreateModalContext'
import PostList from '../../components/blog/index/PostList'
import { PostListPaginationProvider } from '../../context/PostListPaginationContext'

export const getServerSideProps = async () => {
  const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
  const response = await fetch(`${BASE_URL}blog/posts/?page=1`)
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}

export default function Home({ mobileNav, posts }) {
  
  return (
    <>
      <MetaComponent title="corecare blog" name="corecare" description="corecare blog for all services" url={frontend_base + "blog"} />
      <PostCreateModalProvider>
        <Layout mobileNav={mobileNav}>
          <div className={`ui container ${style.container}`}>
          {/* <button className={`negative ui button ${textEditorLoading && "loading"}`}  onClick={() => setCreateModalActive(true)}>Create Post</button> */}
            <h1>Recent Posts</h1>
            <PostListPaginationProvider initialData={posts}>
              <PostList />
            </PostListPaginationProvider>
          </div>
        </Layout>
      </PostCreateModalProvider>
    </>
  )
}
