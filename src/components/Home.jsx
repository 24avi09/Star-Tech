import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solutions to all your Problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problrm solving ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who are we?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic commodi fugit maiores, ad eaque eos sapiente reiciendis labore cupiditate! Exercitationem aut maiores, consequuntur, repellat quae numquam, tempore mollitia eveniet aspernatur quam consectetur. Ducimus placeat nobis libero at nesciunt veritatis magni officia delectus culpa nihil consequatur corrupti cupiditate ipsam itaque neque, a quam officiis ad expedita assumenda earum impedit. Sequi nemo earum eos, nisi velit nesciunt aliquam dolores veritatis voluptatibus repellat totam, quasi qui inventore hic necessitatibus vitae illo amet blanditiis ullam ipsum adipisci porro. Omnis sequi dolorum eos molestias autem ipsam, quis adipisci neque, nulla perspiciatis consectetur nam sed iusto asperiores maiores.
                    </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s", }} >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s", }} >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s", }} >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "1s", }} >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home