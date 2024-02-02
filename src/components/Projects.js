import "../style.css"
import VerticalCarousel from "./VerticalCarousel";

function Projects() {
    const projects =
        [
            {
                title : "Poker Game in Assembly",
                description : "",
                image : "",
            },
            {
                title : "Pocket Calculator with Basys3",
                description : "",
                image : "",
            },
            {
                title : "Cinema API in Spring Boot",
                description : "",
                image : "",
            },
            {
                title : "Smart Lock Door with Arduino Uno",
                description : "",
                image : "",
            },
            {
                title: "Polynomial Calculator in JAVA",
                description: "",
                image: ""
            }
        ]

    return (
        <>
            <VerticalCarousel projects={projects} />
        </>
    );
}

export default Projects;
