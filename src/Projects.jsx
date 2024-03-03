import react, {props} from 'react'

function Projects(props) {
    return(<>
    <div className="Project">
        <p className='Text'>{props.Name}</p>
        <p className='SubText'>{props.subText}</p>
        <img src={props.imgsrc}  />
        <a href={props.url}><h3 className='text'><button>visit here</button></h3></a>
    </div>
    </>);
}

export default Projects