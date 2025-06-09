import React from 'react'

const Body = () => {
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "https://html.com/wp-content/uploads/flamingo.webp"
    })

    console.log("hi")

const {topText, bottomText, imgUrl} = meme

const displayMeme = (event) => {
  const {name, value} = event.currentTarget
  setMeme(prevMeme => ({
    ...prevMeme, [name]: value //name is used as a key in update
  }));
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
                    <button>Get a new meme image 🖼</button>
                </div>
                <div>
                    <div className="meme">
                        <img src={imgUrl} />
                        <p className="top">{topText}</p>
                        <p className="bottom">{bottomText}</p>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Body
