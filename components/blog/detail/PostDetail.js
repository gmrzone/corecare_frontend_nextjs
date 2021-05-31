import style from '../../../styles/blog/postDetail.module.scss';
import Image from 'next/image';
import Card from '../Card'
const PostDetail = ({ post }) => {
    return (
            <Card>
            <div className={style.header}>
                <h1 className={style.title}>{post.title}</h1>
                {/* <p className={style.meta}>Created by <span className={style.highlight}>{post.author.username || post.author.first_name + post.author.last_name}</span> on <span className={style.highlight}>{post.created}</span></p> */}
                <p className={style.meta}><span className={style.highlight}>{post.created}</span> By <span className={style.highlight}>{post.author.username || post.author.first_name + post.author.last_name}</span></p>
            </div>
            <div className={style.image}>
                <Image layout="intrinsic" src="http://127.0.0.1:8000/media/default_blog.jpg" width={1280} height={720}/>
            </div>
            <div className={style.body} dangerouslySetInnerHTML={{__html: post.body}}>
            </div>
            </Card>
    )
}

export default PostDetail