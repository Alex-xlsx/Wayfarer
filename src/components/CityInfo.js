function CityInfo(props) {
    return(
        <div class="city-info">
            <img src={props.city.image} alt=""></img>
            <p></p>
            <form method="GET" action="/">
            <button type="submit" value="/">Make Post</button>
            </form>
        </div>
    );
}

export default CityInfo; 