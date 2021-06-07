import Layout from '../../components/blog/Layout';
import MetaComponent from '../../components/common/MetaComponent';
import { frontend_base } from '../../data/_variables';
import style from '../../styles/blog/index.module.scss';
import { PostCreateModalProvider } from '../../context/PostCreateModalContext'
import PostList from '../../components/blog/index/PostList'
import TopPost from '../../components/blog/index/TopPosts'
import { PostListPaginationProvider } from '../../context/PostListPaginationContext'

export const getStaticProps = async () => {
  const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
  const response = await fetch(`${BASE_URL}blog/posts/?page=1`)
  const data = await response.json()

  return {
    props: {
      posts: data
    },
    revalidate: 43200 , 
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
            <TopPost />
            <PostListPaginationProvider initialData={posts} mobileNav={mobileNav}>
                <PostList />
            </PostListPaginationProvider>
          </div>
        </Layout>
      </PostCreateModalProvider>
    </>
  )
}
