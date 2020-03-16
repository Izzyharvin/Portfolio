import React from 'react';
import IsraelHarvin from '../../images/israel.jpg';
import GithubButton from '../GithubButton';
import LinkedInButton from '../LinkedInButton';


function Home() {
    return (
        <div>
            <h1>The New Beginning to Programming.</h1>
            <img src={IsraelHarvin} className="IsraelHarvin" alt="Israel Harvin" width="200" height="200"></img>
            <p> Creatively-driven Front-End Web Developer focused on 
                building attractive and functional webpages. Educated at The Art 
                Institute of Charlotte for Graphic Design and still 
                attending Central Piedmont Community College for an 
                Associate in Simulation and Gaming Development. 
                Graduated at The University of North Carolina at 
                Charlotte Continuing Education Full Stack Flex Program 
                with skills in Visual Studio Code, React, 
                Maya, CSS, HTML, Javascript, Adobe Illustrator, and 
                Adobe Photoshop. My passion for creativity and 
                technology brought me to the front-end. As a front-end 
                developer, I take empty blank screen of nothing and 
                turn it into a creative masterpiece by telling the 
                computer what to do. Strengths in art design, 
                creativity, a mind for learning, and completing 
                projects with initiative. I want to be in a position 
                to build a website with my creativity using technology.
            </p>

            <table class="table">
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

            <div>
            <p><strong>Email: izzy84.ih@gmail.com</strong></p>
            </div>

            <div className="github-button">
                <GithubButton />
            </div>
            <div className="linkedin-button">
                <LinkedInButton />
            </div>
        </div>
    )
    
}

export default Home;