function Footer(){
    return(
        <footer id="footer">
            <p>Konohagakure Hiden Secret Taijutsu Technique: One Thousand Years of Death.</p>
            <button onClick={function scrollDown(){
                    document.getElementById('nav').scrollIntoView({behavior:"smooth"})
            }} type="submit" value="/">Scroll to Top</button>
        </footer>
    );
}

export default Footer;