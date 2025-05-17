import React, { useState, useEffect } from 'react'

const CountTiles = ({formData}) => {
    const [totalCharacters, setTotalCharacters] = useState()
    const [wordCount, setWordCount] = useState()
    const [sentenceCount, setSentenceCount] = useState()

    useEffect(() => {
        const text = formData.text;
        const excludeSpaces = formData.spaces === 'excludeSpaces';
      
        const processedText = excludeSpaces ? text.replace(/\s/g, '') : text;
        const trimmedText = excludeSpaces ? processedText : text.trim();
      
        const words = excludeSpaces
          ? trimmedText === "" ? [] : [trimmedText] // Treat entire string as 1 "word" if no spaces
          : trimmedText.split(/\s+/).filter(w => w.length > 0);
        setWordCount(words.length === 0 ? "00" : words.length);
      
        const sentences = trimmedText
          .split(/[.!?]+/)
          .map(s => s.trim())
          .filter(s => s.length > 0);
        setSentenceCount(sentences.length === 0 ? "00" : sentences.length);
      
        const characters = excludeSpaces ? text.replace(/\s/g, '') : text;
        setTotalCharacters(characters.length === 0 ? "00" : characters.length);
      }, [formData.text, formData.spaces]);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-7'>
        <div className='bg-purple-400 py-5 px-3 sm:px-5 sm:py-7 rounded-md'>
            <h2 className='text-3xl font-semibold sm:text-4xl'>{totalCharacters}</h2>
            <p className='mt-1'>Total characters</p>
        </div>
        <div className='bg-yellow-500 py-5 px-3 sm:px-5 sm:py-7 rounded-md'>
            <h2 className='text-3xl font-semibold sm:text-4xl'>{wordCount}</h2>
            <p className='mt-1'>Word count</p>
        </div>
        <div className='bg-red-300 py-5 px-3 sm:px-5 sm:py-7 rounded-md'>
            <h2 className='text-3xl font-semibold sm:text-4xl'>{sentenceCount}</h2>
            <p className='mt-1'>Sentence count</p>
        </div>
    </div>
  )
}

export default CountTiles
