const About = () => {
    return (
        <about>
            <h1 className="aboutHeading">About Us</h1>
        <div className="aboutText">
                <h1 className="vision">Our Vision</h1>
                <p>The next movement in paragraph development is an explanation of each example and its relevance to the topic sentence. The explanation should demonstrate the value of the example as evidence to support the major claim, or focus, <br/> <br/>In your paragraph.

                    Continue the pattern NONE of your examples should be left unexplained. You might be able to explain the relationship between the example and the topic sentence in the same sentence which introduced the example. More often, however, you will need to explain that relationship in a separate sentence.
                    <br/> <br/>
                    Continue the pattern of giving examples and explaining them until all points/examples that the writer deems necessary have been made and explained.
                    </p>
            </div>
            <div className="about-img">
                <img src={require('../images/about-img.jpg')} alt="about" />
            </div>
        </about>
    )
}

export default About;