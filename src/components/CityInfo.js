function CityInfo(props) {
    return(
        <div class="city-info">
            {/* <img src={props.city.image} alt=""></img> */}
            <img src="https://media.timeout.com/images/105395973/image.jpg" alt="" width="500" height="350"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos qui, asperiores doloribus aspernatur eum, quis doloremque commodi facere a, sint ipsum? Nisi odio aspernatur aliquam quo quia vitae est neque?</p>
            <form method="GET" action="/">
            <button type="submit" value="/">Make Post</button>
            </form>
        </div>
    );
}

export default CityInfo; 