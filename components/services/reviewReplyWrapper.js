import { connect } from 'react-redux'
const reviewReplyWrapper = ({ children, mobileNav }) => {
    return (
        <div className="comments" style={{margin: `${mobileNav ? "0em 0em 1em 1em" : "0em 0em 1em 2em"}`}}>
            {children}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        mobileNav : state.mobileNav
    }
}
export default connect(mapStateToProps)(reviewReplyWrapper);