import React from 'react'

const Body = () => {
const [meme, setMeme] = React.useState({ //for meme text
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
    alt: "meme image"
    })
const [allMemes, setallMemes] = React.useState([]) //for meme img

const {topText, bottomText} = meme

const displayMeme = (event) => { //get the values the user is typing in input fields into state
  const {name, value} = event.currentTarget
  setMeme(prevMeme => ({
    ...prevMeme, [name]: value //name is used as a key in update object
  }));
}

React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => {setallMemes(data.data.memes)
            console.log(data.data.memes)
        })
},[])

const getRandomImg = () => {
    let random = Math.floor(Math.random() * allMemes.length)
     setMeme(prevMeme => (
        {...prevMeme, randomImg: allMemes[random].url, alt: allMemes[random].name}
    ))
    console.log(meme)
}


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
                    <button onClick={getRandomImg}>Get a new meme image 🖼</button>
                </div>
                <div>
                    <div className="meme">
                        <img src={meme.randomImg} alt={meme.alt}/>
                        <p className="top">{topText}</p>
                        <p className="bottom">{bottomText}</p>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Body
