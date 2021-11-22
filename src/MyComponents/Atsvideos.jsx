import React from 'react'
import './Atsvidcss.css';
export default function Atsvideos() {

    const first_video = <iframe className='Sethw' src="https://www.youtube.com/embed/8tWLo4RJ9Lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const second_video = <iframe className='Sethw' src="https://www.youtube.com/embed/9jFe36uuZrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    const see_more = <a
        className="App-link"
        href="https://www.youtube.com/channel/UC4Pc9V7-QjsJZKkUS8I0iqw/videos"
        target="_blank"
        rel="noopener noreferrer"
    >
        See More
    </a>

    return (
        <div className='Ats-css'>

            <h1>Alumni Talk Series</h1>
            <div className='Space'>
                {first_video}
                {second_video}
            </div>
            <h3>{see_more}</h3>

        </div>
    )
}
