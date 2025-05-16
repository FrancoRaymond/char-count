import React,{useState} from 'react'
import Navbar from './components/Navbar'
import CountTiles from './components/CountTiles';


function App() {
  const [formData, setFormData] = useState({ text: '', spaces: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section className='bg-gray-600'>
      <Navbar />
      <div>
        <h2>Analyze your text real-time.</h2>
        <form action="" className='flex flex-col'>
        <textarea 
            name='text' 
            cols="14" 
            rows="7"
            className='py-4 px-3 rounded-md bg-slate-800 outline-none text-white resize-none'
            placeholder='Enter your message'
            onChange={handleChange}
            value={formData.text}
          />
          <label htmlFor="checkbox" className='flex'>
            <input 
              type="checkbox" 
              className='ml-3'
              value='excludeSpaces'
              name='spaces'
              onChange={handleChange}
            />Exclude spaces
          </label> 
        </form>
        <h1>{formData.text.length}</h1>
        <h2>{formData.spaces}</h2>
      </div>
      <CountTiles />
    </section>
  )
}

export default App
