import '../../style/main-image.css'
import MainSearch from '../global/Header/MainSearch'

const MainImage = (props) => {

    return (
        <div className="main-image-con" style={{backgroundImage: `linear-gradient(to bottom, #1b1b1b 10%, transparent 50%, black 100%), url(${props.src})`}}>
            <div className="ui container">
                <div className="main-title">
                    <h1>Home of the Experts</h1>
                </div>
                <MainSearch />
            </div>
        </div>
    )
}

export default MainImage