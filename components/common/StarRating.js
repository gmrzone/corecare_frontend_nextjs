const StarRating = ({ rating }) => {
    const renderStars = () => {
        const stars = []
        for (let i=1; i <= 5; i++){
            if (i <= rating){
                stars.push(<i className="icon active" key={i}/>)
                
            }
            else{
                stars.push(<i className="icon" key={i}/> )
            }
        }
        return stars
    }
    return (
        <div className="ui star rating star-container">
            {renderStars()}
            <style jsx>{`
                .star-container {
                    display: block;
                }
            `}</style>
        </div>
    )
}

export default StarRating