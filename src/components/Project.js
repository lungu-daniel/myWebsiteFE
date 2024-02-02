import "../style.css"

const Project = (props) => {
    return(
        <>
            <div className="card">
                <div>
                    <div>
                        Title : {props.projectData.title}
                    </div>
                    <div>
                        Description : {props.projectData.description}
                    </div>
                    <img src={props.projectData.image} alt={"no image"}/>
                </div>

            </div>
        </>
    )
}

export default Project;