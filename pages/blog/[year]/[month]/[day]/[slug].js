import Layout from '../../../../../components/blog/Layout';
import MetaComponent from '../../../../../components/common/MetaComponent';
import { frontend_base } from '../../../../../data/_variables'
import PostDetail from '../../../../../components/blog/detail/PostDetail'
import style from '../../../../../styles/blog/postDetail.module.scss';


export const getStaticPaths = async () => {
    const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
    const data = await fetch(`${BASE_URL}blog/posts/`)
    const response = await data.json()
    
    const paths = response.map(x => {
      return {params: {year: x.date_slug.year, month: x.date_slug.month, day: x.date_slug.day, slug: x.slug}}
    })

    return {
      paths,
      fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params }) => {
  const BASE_URL = process.env.NODE_ENV === 'development' ? process.env['API_BASE_URL'] : process.env['API_BASE_URL_PROD']
  const data = await fetch(`${BASE_URL}blog/post/${params.year}/${params.month}/${params.day}/${params.slug }/`)
  const post = await data.json()
    return {
      props: { post },
    }
}


export default function Home({ mobileNav, post }) {
    console.log(post)
  return (
    <>
      <MetaComponent title={post.title} name="corecare" url={frontend_base + `blog/${post.date_slug.year}/${post.date_slug.month}/${post.date_slug.day}/${post.slug}`} />
      <Layout mobileNav={mobileNav}>
        <div className={`ui container ${style.container}`}>
          <PostDetail post={post}/>
        </div>
      </Layout>
    </>
  )
}