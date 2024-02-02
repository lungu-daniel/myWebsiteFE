import React from 'react';
import Project from "./Project";
import "../style.css";

const VerticalCarousel = (props) => {

    return (
        <div className="carousel">
            {[...Array(props.projects.length)].map((_, index) => (
                <Project key = {index}  projectData = {props.projects[index]}/>
            ))}
        </div>
    );
};

export default VerticalCarousel;
