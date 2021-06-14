function CityInfo(props) {
    return(
        <div className="city-info row">
            {/* <img src={props.city.image} alt=""></img> */}
            <img src={props.city.image} alt="" width="500" height="350"></img>
            <div className="city-info-card"> 
                <p>{}</p>
                <button type="submit" value="/">Make Post</button>
            </div>    
        </div>
    );
}

export default CityInfo; 