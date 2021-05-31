
function Button(props) {
    const mostrarAlerta = () => {
        alert(`mostrando botón ${props.title}`)
    }
    return (
        <>
            <button
                onClick={mostrarAlerta}>
                {props.title}
            </button>
        </>
    )
}

export default Button
