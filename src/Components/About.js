import React from 'react';

const About = (props) => {
    return (
        <div id={'about'}>
            <div className={'about-image'}>
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam cumque debitis delectus eveniet expedita
                    explicabo fugiat hic id ipsum iste, molestias mollitia natus nobis nulla officiis perspiciatis ratione
                    recusandae reprehenderit rerum sed voluptatibus.</p>
                <button>{props.button}</button>
            </div>
            
        </div>
    );
};

export default About;