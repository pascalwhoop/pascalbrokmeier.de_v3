import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import PropTypes from 'prop-types'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

//class Section{
//    /**
//     * 
//     * @param {String} name 
//     * @param {String} snippet 
//     * @param {String} url 
//     * @param {Object} image 
//     */
//    constructor(name, snippet, url, image) {
//        this.name = name
//        this.snippet = snippet
//        this.url = url
//        this.image = image
//    }
//}
//const LandingCard = (props) => (
//                <section>
//                    <Link to={props.url} className="image">
//                        <img src={props.imgSrc} alt="" />
//                    </Link>
//                    <div className="content">
//                        <div className="inner">
//                            <header className="major">
//                                <h3>{props.name}</h3>
//                            </header>
//                            <p>{props.snippet}</p>
//                            <ul className="actions">
//                                <li><Link to={props.url} className="button">Show</Link></li>
//                            </ul>
//                        </div>
//                    </div>
//                </section>
//)
//LandingCard.propTypes = {
//    url: PropTypes.string
//}

const Landing = (props) => {
    return (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
               <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)
}


export default Landing