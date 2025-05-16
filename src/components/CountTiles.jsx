import React, { useState } from 'react'

const CountTiles = () => {
    const [totalCharacters, setTotalCharacters] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [sentenceCount, setSentenceCount] = useState(0)
  return (
    <div>
        <div>
            <h2>{totalCharacters}</h2>
            <p>Total characters</p>
        </div>
        <div>
            <h2>{wordCount}</h2>
            <p>Word count</p>
        </div>
        <div>
            <h2>{sentenceCount}</h2>
            <p>Sentence count</p>
        </div>
    </div>
  )
}

export default CountTiles
