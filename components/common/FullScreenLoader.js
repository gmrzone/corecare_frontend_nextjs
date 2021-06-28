import MetaComponent from './MetaComponent';
import { frontend_base } from '../../data/_variables'
const FullScreenLoader = () => {
    return (
        <>
        <MetaComponent title="Corecare login" url={frontend_base + "login"} name="Corecare Login"/>
            <div id="model"></div>
            <div className="ui active centered inline loader main-loader"></div>
            <style jsx>{`
                .main-loader {
                    margin: auto !important;
                    font-size: 30px;
                }
                .main-loader:before {
                    width: 40px;
                    height: 40px;
                }   
                .main-loader:after {
                    width: 40px;
                    height: 40px;
                }
                @media (min-width: 993px){
                    .main-loader  {
                        font-size: 40px;
                    }
                    .main-loader:before {
                        width: 60px;
                        height: 60px;
                    }
                    .main-loader:after {
                        width: 60px;
                        height: 60px;
                    }
                }
            `}</style>
        </>
    )
}

export default FullScreenLoader