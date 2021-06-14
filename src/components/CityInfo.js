function CityInfo(props) {
    return(
        <div class="city-info">
            {/* <img src={props.city.image} alt=""></img> */}
            <img src={props.city.image} alt="" width="500" height="350"></img>
            <p>{}</p>
            <form method="GET" action="/">
                <button type="submit" value="/">Make Post</button>
            </form>
        </div>
    );
}

export default CityInfo; 