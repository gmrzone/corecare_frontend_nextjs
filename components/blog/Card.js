const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
            <style jsx>{`
                .card {
                    background: white;
                    border-radious: 4px;
                    padding: 5px;
                }
                @media (min-width: 360px){
                    .card {

                    padding: 10px;
                }
                }
                @media (min-width: 400px){
                    .card {

                    padding: 15px;
                }
                }
                @media (min-width: 992px){
                    .card {

                    padding: 20px;
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
                }
                }
            
            `}</style>
        </div>
    )
}

export default Card