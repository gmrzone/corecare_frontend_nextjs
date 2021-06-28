const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
            <style jsx>{`
                .card {
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
                    background: white;
                    border-radious: 4px;
                    padding: 10px;
                    margin-bottom: 20px;
                    width: 100%;
                    max-width: 900px;
                    margin: 0 auto 20px auto
                }
                @media (min-width: 360px){
                    .card {

                    padding: 15px;
                   
                }
                }
                @media (min-width: 992px){
                    .card {

                    padding: 20px;
                    margin-bottom: 30px;
                }
                }
                @media (min-width: 1200px){
                    .card {

                    padding: 30px;
                }
                }
                @media (min-width: 1600px){
                    .card {

                    padding: 40px;
                    margin-bottom: 40px;
                }
                }
            
            `}</style>
        </div>
    )
}

export default Card