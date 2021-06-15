function CityInfo(props) {
    return(
        <div className="city-info row">
            <img src={props.image} alt="" width="500" height="350"></img>
            <div className="city-info-card"> 
                {/* <h4>{props.city.name}</h4> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio placeat temporibus, sed repellendus repellat maxime tenetur mollitia laborum sequi!</p>
                <button onClick={function scrollDown(){
                    document.getElementById('footer').scrollIntoView({behavior:"smooth"})
                }} type="submit" value="/">Make Post</button>
            </div>    
        </div>
        
    );
}

export default CityInfo; 