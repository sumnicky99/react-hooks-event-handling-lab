// Code EyesOnMe Component Here

export default function EyesOnMe() {
    return (
        <div>
            <button onFocus={getFocus} onBlur={getBlur}>Eyes on me</button>
        </div>
    )
}

function getFocus(){
    return console.log("Good!")
}

function getBlur() {
    return console.log("Hey! Eyes on me!")
}