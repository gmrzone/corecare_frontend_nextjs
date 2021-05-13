import style from '../../styles/login/LoginFooter.module.scss';
const LoginFooter = () => {
    return (
        <div className="login-footer">
            <div className={style.social__icons__login}>
                <a href="https://www.facebook.com/GamerZonei5" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="facebook icon"></i></a>
                <a href="#afzal" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="twitter icon"></i></a>
                <a href="https://www.linkedin.com/in/afzal-saiyed-b25004200/" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="linkedin icon"></i></a>
                <a href="https://www.instagram.com/afzal__saiyed/" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="instagram icon"></i></a>
                <a href="https://www.youtube.com/channel/UCqHpah7p2NjkLxywQfG0d-Q" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="youtube icon"></i></a>
                <a href="https://github.com/gmrzone" className={style.social_link__login} target="_blank" rel="noopener noreferrer"><i className="github icon"></i></a>
            </div>
            <div className={style.footer_end}>
                &#169; 2019-2021 CoreCare Technologies Pvt Ltd
            </div>
        </div>
        
    )
}

export default LoginFooter