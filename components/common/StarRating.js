const StarRating = ({ rating, size, setStar, dynamic }) => {
    const handleClick = (e) => {
        setStar(e.target.dataset.id)
    }
    // const handleMouseOver = (e) => {
    //     e.stopPropagation()
    //     const target_id = parseInt(e.target.dataset.id)
    //     Array.from(e.target.parentNode.children).forEach(x => {
    //         if (parseInt(x.dataset.id) > target_id){
    //             x.classList.remove('active')

    //         }
    //         else{
    //             x.classList.add("active")
    //         }
    //     })

    // }

    const renderStars = () => {
        const stars = []
        for (let i=1; i <= 5; i++){
            if (i <= rating){
                stars.push(<i className="icon active" key={i} data-id={i} onClick={dynamic ? handleClick : null} />)
                
            }
            else{
                stars.push(<i className="icon" key={i} data-id={i} onClick={dynamic ? handleClick : null} /> )
            }
        }
        return stars
    }
    // const afzal = (e) => {
    //     if (e.target.dataset.name === "af"){
    //         console.log("Afzal")
    //         Array.from(e.target.children).forEach(x => {
    //             if (parseInt(x.dataset.id) > rating){
    //                 x.classList.remove("active")
    //             }
    //             else{
    //                 x.classList.add("active")
    //             }
    //         })
    //     }
    // }
    return (
        <div className={`ui star rating star-container ${size && size}`}>
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