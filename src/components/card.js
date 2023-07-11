


export const Card = (props) => {


    return <div className={`card ${props.cName}`} onClick={() => {props.action(props.name, props.cName)}}>
        <img src={props.url} alt="cat card"/>
        <h3> {props.name}</h3>
    </div>
}