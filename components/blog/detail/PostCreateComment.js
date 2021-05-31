import Card from "../Card";
import style from "../../../styles/blog/postDetail.module.scss";

const PostCreateComment = () => {
  return (
    <Card>
      <div className={style.create_form_head}>
        <h3>Leave a Comment</h3>
        <span>Your Detail will not be published</span>
      </div>
      <form className={`ui form large ${style.comment_form}`}>
        <div className="field">
          <label>First Name</label>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div classNAme="field">
            <label>Comment</label>
            <textarea></textarea>
        </div>
        <div className={style.form_action}>
            <button className="ui secondary button">
                Comment
            </button>
        </div>
      </form>
    </Card>
  );
};

export default PostCreateComment;
