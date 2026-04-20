export default function Button({ color, on, toggle }) {
    let style = {
        backgroundColor: color,
        opacity: on ? 1 : 0.2
    };
    return (
        <button
            className="light-button"
            type="button"
            style={style}
            onClick={toggle}
           >
            
        </button>
    )
}