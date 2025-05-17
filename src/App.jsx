import React,{useState} from 'react'
import Navbar from './components/Navbar'
import CountTiles from './components/CountTiles';
import LetterDensity from './components/LetterDensity';


function App() {
  const [formData, setFormData] = useState({ text: '', spaces: '' });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? value : '') : value,
    }));
  };

  return (
    <section className='bg-gray-600 px-2 sm:px-5 md:px-10 lg:px-24'>
      <Navbar />
      <div className='mt-6'>
        <h2 className='text-white text-2xl sm:text-4xl font-semibold text-center '>Analyze your text in<br/> real-time.</h2>
        <form action="" className='flex flex-col mt-7'>
        <textarea 
            name='text' 
            cols="14" 
            rows="7"
            className='py-4 px-3 rounded-md bg-slate-800 outline-none text-gray-200 resize-none'
            placeholder='Enter your message'
            onChange={handleChange}
            value={formData.text}
          />
          <label htmlFor="checkbox" className='flex mt-2 items-center align-middle text-gray-200'>
            <input 
              type="checkbox" 
              className='ml-1 mr-3'
              value='excludeSpaces'
              name='spaces'
              onChange={handleChange}
            />Exclude spaces
          </label> 
        </form>
      </div>
      <CountTiles formData={formData}/>
      <LetterDensity  formData={formData}/>
    </section>
  )
}

export default App
