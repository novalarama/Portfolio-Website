import React from 'react'
import "./Experiences.css";

export default function Experiences() {
    return (
        <section id='experiences'>
            <div className="experiences flexCenter paddings innerWidth h-container">
                <div className='ex-left'>
                    <p>Experiences that I have</p>
                    <p>A broad range of experiences has equipped me with diverse skills to confidently tackle complex challenges with creativity.</p>
                    <div className='ex-card'>
                        <p>Gredu</p>
                        <div className='ex-detail'>
                            <div className='ex-timeline'>
                                <div className='ex-circular'></div>
                                <div className='ex-line'></div>
                                <div className='ex-circular'></div>
                            </div>
                            <div className='ex-desc'>
                                <div className='ex-desc-newest'><p>Junior Flutter Developer Internship</p>
                                    <p>August 22 - March 23</p>
                                    <ul>
                                        <li>Fixed bug errors and ensured a smooth user experience.</li>
                                        <li>Implemented UI designs accurately to create an appealing user interface.</li>
                                        <li>Prioritized clean and organized code for improved readability and maintainability.</li>
                                        <li>Developed new features in collaboration with the team.</li>
                                        <li>Implemented internationalization to support multiple languages.</li>
                                    </ul></div>
                                <div className='ex-desc-oldest'><p>Junior Quality Assurance Internship</p>
                                    <p>June 22 - July 23</p>
                                    <ul>
                                        <li>Worked on a team of QA engineers and developers.</li>
                                        <li>Responsible for testing both web and mobile applications.</li>
                                        <li>Using a variety of testing tools, including Postman and JIRA.</li>
                                        <li>Worked closely with developers to identify and fix defects.</li>
                                        <li>I was able to successfully complete all of my assigned tasks.</li>
                                    </ul></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ex-right'>
                    <img src='./assets/photo/Experiences.png' />
                </div>
            </div>
        </section>
    )
}