function CityInfo(props) {
    return(
        <div className="city-info row">
            {/* <img src={props.city.image} alt=""></img> */}
            <img src="https://media.timeout.com/images/105395973/image.jpg" alt="" width="500" height="350"></img>
            <div className="city-info-card">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui, asperiores doloribus aspernatur eum, quis doloremque commodi facere a, sint ipsum? Nisi odio aspernatur aliquam quo quia vitae est neque?</p>
                <button>Make Post</button>
            </div>
        </div>
    );
}

export default CityInfo; 