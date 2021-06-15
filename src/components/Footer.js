function Footer(){
    return(
        <footer id="footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eveniet aliquid! Autem perferendis facere obcaecati aspernatur, molestias iusto minima provident.</p>
            <button onClick={function scrollDown(){
                    document.getElementById('nav').scrollIntoView({behavior:"smooth"})
            }} type="submit" value="/">Scroll to Top</button>
        </footer>
    );
}

export default Footer;