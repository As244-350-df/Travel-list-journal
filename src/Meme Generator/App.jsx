import React, { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
    let memes=[{
            "id": "61579",
            "name": "One Does Not Simply",
            "url": "https://i.imgflip.com/1bij.jpg",
            "width": 568,
            "height": 335,
            "box_count": 2
         }]
    function generateRandomMeme() {
        const response =fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then((data)=>memes=data.data.memes).catch(err=>console.log)
        console.log(response)
    }
    const [meme, setMeme] = useState(memes[0]);
    useEffect(generateRandomMeme,[meme])
    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memes.length);
        setMeme(memes[randomIndex]);
        console.log(memes[randomIndex])
    }
    const [topText, setTopText] = useState(meme.name);
    const [bottomText, setBottomText] = useState("");
    const [memeImage, setMemeImage] = useState(meme.url);
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Meme Generator</h1>
            <div className="row mb-4">
                <div className="col-md-5 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Top text"
                        value={topText}
                        onChange={e => setTopText(e.target.value)}
                    />
                </div>
                <div className="col-md-5 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bottom text"
                        value={bottomText}
                        onChange={e => setBottomText(e.target.value)}
                    />
                </div>
                <div className="col-md-2 mb-2">
                    <button className="btn btn-primary w-100" onClick={getRandomMeme}>
                        New Meme
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="position-relative" style={{ width: 400, height: 400 }}>
                    <img
                        src={memeImage}
                        alt="Meme"
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <h2
                        className="position-absolute w-100 text-center"
                        style={{
                            top: 10,
                            left: 0,
                            color: "white",
                            textShadow: "2px 2px 4px #000",
                            fontWeight: "bold",
                            fontSize: "2rem",
                            pointerEvents: "none"
                        }}
                    >
                        {topText}
                    </h2>
                    <h2
                        className="position-absolute w-100 text-center"
                        style={{
                            bottom: 10,
                            left: 0,
                            color: "white",
                            textShadow: "2px 2px 4px #000",
                            fontWeight: "bold",
                            fontSize: "2rem",
                            pointerEvents: "none"
                        }}
                    >
                        {bottomText}
                    </h2>
                </div>
            </div>
        </div>
    );
}