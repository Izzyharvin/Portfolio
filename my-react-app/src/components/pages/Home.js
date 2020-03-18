import React from 'react';
import IsraelHarvin from '../../images/israel.jpg';
import Buttons from '../Buttons';
import "./Home.css";


function Home() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="title">The New Beginning to Programming.</h1>
                    <img src={IsraelHarvin} className="IsraelHarvin" alt="Israel Harvin" ></img>
                    <p className="description">Creatively-driven Front-End Web Developer focused on 
                    building attractive and functional webpages. Educated at The Art 
                    Institute of Charlotte for Graphic Design and graduated at The University of North Carolina at 
                    Charlotte Continuing Education Full Stack Flex Program 
                    with skills CSS3, React.js, JavaScript, HTML5, Adobe Illustrator, and 
                    Adobe Photoshop. My passion for creativity and 
                    technology brought me to the front-end. As a front-end 
                    developer, I take empty blank screen of nothing and 
                    turn it into a creative masterpiece by telling the 
                    computer what to do. Strengths in art design, 
                    creativity, a mind for learning, and completing 
                    projects with initiative. I want to be in a position 
                    to build a website with my creativity using technology.</p>
                </div>

                <div>
                    <p><strong>Email: izzy84.ih@gmail.com</strong></p>
                </div>

                <div className="buttons">
                    <Buttons />
                </div>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th><strong>Soft Skills:</strong></th>
                    <th><strong>Technical Skills:</strong></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Leadership</td>
                    <td>React.js</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Communication</td>
                    <td>CSS3</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Problem Solving</td>
                    <td>JavaScript</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Teamwork</td>
                    <td>Adobe Illustrator</td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>Creativity</td>
                    <td>API's</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
    
}

export default Home;