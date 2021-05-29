const BlogImageCropper = ({ cropperModalActive, children, setCropperModalActive }) => {
    return (
        <div className={`container ${!cropperModalActive && "hidden"}`}>
            <div className={`ui fullscreen modal transition ${cropperModalActive ? "visible active" : "hidden"}`}>
                <i className="close icon" onClick={() => setCropperModalActive(false)}/>
                <div className="header">
                    Update Your Settings
                </div>
                <div className="content">
                    {children}
                </div>
                <div className="actions">
                    <div className="ui button">Cancel</div>
                    <div className="ui green button">Crop</div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: block;
                    position: fixed;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    height: 100vh;
                    z-index: 1002;
                }
                .container.hidden {
                    display: none;
                }
                .content {
                    margin-top: 60px;
                }
                @media (min-width: 992px){
                    .content {
                        margin-top: 90px;
                    }
                }
            `}</style>
        </div>
    )
}

export default BlogImageCropper

//  <div className="ui fullscreen modal transition hidden"> Hidden

// ui fullscreen modal transition visible active Active