import React from 'react'

const Body = () => {
const [meme, setMeme] = React.useState({ //for meme text
    topText: "",
    bottomText: "",
    })
const [selectedMeme, setselectedMeme] = React.useState([]) //for meme img

const {topText, bottomText} = meme

const displayMeme = (event) => { //get the values the user is typing in input fields into state
  const {name, value} = event.currentTarget
  setMeme(prevMeme => ({
    ...prevMeme, [name]: value //name is used as a key in update object
  }));
}

const returnRandomNr = () => {
    let random = Math.floor(Math.random() * 101)
    return random
}

const getNewImage = () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data => {setselectedMeme(data.data.memes[returnRandomNr()])
        console.log(data.data.memes)
    })
}

React.useEffect(()=>{
    getNewImage()
},[])

console.log(returnRandomNr())
console.log("selectedMeme", selectedMeme)



  return (
        <main>
            <div className="main">
                <div className="form">
                    <label>Top Text
                        <input
                            type="text"
                            name="topText"
                            onChange={displayMeme}
                            value={topText}
                        />
                    </label>

                    <label>Bottom Text
                        <input
                            type="text"
                            name="bottomText"
                            value={bottomText}
                            onChange={displayMeme}
                        />
                    </label>
                    <button onClick={getNewImage}>Get a new meme image 🖼</button>
                </div>
                <div>
                    <div className="meme">
                        <img src={selectedMeme.url} alt={selectedMeme.name}/>
                        <p className="top">{topText}</p>
                        <p className="bottom">{bottomText}</p>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Body
