import React from 'react'

const Body = () => {
  return (
        <main>
            <div className="main">
                <div className="form">
                    <label>Top Text
                        <input
                            type="text"
                            placeholder="One does not simply"
                            name="topText"
                        />
                    </label>

                    <label>Bottom Text
                        <input
                            type="text"
                            placeholder="Walk into Mordor"
                            name="bottomText"
                        />
                    </label>
                    <button>Get a new meme image 🖼</button>
                </div>
                <div>
                    <div className="meme">
                        <img src="http://i.imgflip.com/1bij.jpg" />
                        <p className="top">One does not simply</p>
                        <p className="bottom">Walk into Mordor</p>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Body
