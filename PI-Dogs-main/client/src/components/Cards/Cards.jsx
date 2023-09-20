
export default function Card(props) {
    return (
        <div className="Card">
            <img className="Image" src={props.image} alt={props.name} />
            <h2 className="Name">{props.name}</h2>
            <p><strong>Life Span:</strong> {props.life_span}</p>
            <p><strong>Temperament:</strong> {props.temperament}</p>
            <p><strong>Height:</strong> {props.height} cm</p>
            <p><strong>Weight:</strong> {props.weight} kg</p>
        </div>
    )
}