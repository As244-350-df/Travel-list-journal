export default function Getreciepe({ onClock }) {
    return (
        <div className="btn-container d-flex my-5 px-3 mx-3 justify-content-between align-items-center">
            <div className="call-to-action">
                <h4 className="h4 fw-bold">get your reciepe here</h4>
                <p className="p text-secondary fs-8">
                    click this button  to get your reciepe
                </p>
            </div>
            <button onClick={onClock} className="btn btn-warning btn-lg text-secondary fw-bold">
                click here
            </button>
        </div>
    )
}