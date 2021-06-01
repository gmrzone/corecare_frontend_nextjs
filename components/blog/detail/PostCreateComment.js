import Card from "../Card";
import style from "../../../styles/blog/postDetail.module.scss";
import CommentForm from './CommentForm'
import React from "react";
const PostCreateComment = ({ forPost, isReply=false, parent_id }) => {


  const {slug, date_slug : { year, month, day } } = forPost



  return (
    <Card>
      <div className={style.create_form_head}>
        <h3>Leave a Comment</h3>
        <span>Your Sensitive Detail will not be published</span>
      </div>
      <CommentForm year={year} month={month} day={day} slug={slug} isReply={isReply} parent_id={parent_id}/>
    </Card>
  );
};

export default PostCreateComment;
