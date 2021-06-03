import style from '../../../styles/blog/postDetail.module.scss';
import Image from 'next/image';
import Card from '../Card'
import { BASE_URL } from '../../../data/_variables'
import LazyLoadImage from '../../common/LazyLoadImage'
const PostDetail = ({ post }) => {
    return (
            <Card>
                <div className={style.header}>
                    <h1 className={style.title}>{post.title}</h1>
                    {/* <p className={style.meta}>Created by <span className={style.highlight}>{post.author.username || post.author.first_name + post.author.last_name}</span> on <span className={style.highlight}>{post.created}</span></p> */}
                    <p className={style.meta}><span className={style.highlight}>{post.created}</span> by <span className={style.highlight}>{post.author.username || post.author.first_name + post.author.last_name}</span></p>
                </div>
                {post.photo &&  <div className={style.image}>
                    {/* <Image layout="intrinsic" src={BASE_URL + post.photo} width={840} height={473}/> */}
                    <LazyLoadImage src={BASE_URL + post.photo} alt_text={post.slug} class_name={style.placeholder}/>
                </div>}
                <div className={style.body} dangerouslySetInnerHTML={{__html: post.body}}>
                </div>
            </Card>
    )
}

export default PostDetail