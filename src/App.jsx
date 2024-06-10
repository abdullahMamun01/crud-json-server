import React, { useEffect, useState } from 'react'
import PostCard from './components/PostCard'

export default function App() {
  const [posts, setPosts] = useState([])
  const [formData ,setFormData] = useState({
    title:'' ,
    content:"",
    author:""
  })

  useEffect(() => {
    function getPosts() {

      fetch('http://localhost:3000/posts')
        .then((response) => response.json())
        .then((data) => {
          console.log(data, ' data')
          setPosts(data)
        })




    }


    getPosts()

  }, [])

  const handleChange  = (event) =>{
    const {name,value} = event.target
    setFormData((prev) => {
      return {
        ...prev ,
          [name] : value
    
      }
    })
  }


  const onSubmit = async (event) => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/posts' , {
      method : "POST" ,
      body : JSON.stringify(formData) ,

      headers: {
        "Content-Type": "application/json",
      },

    } )
    console.log(response)
  }
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      {/* <div className=''>
         {
          posts?.map(post => <li key={post.id}>{post.title}</li>)
         }
      </div> */}

      <div className='block' >

        <form onSubmit={onSubmit}>
          <input type="text" className='my-4'  onChange={handleChange} value={formData.title} name="title" placeholder='enter your title' />
          <br />
          <input type="text" className='my-4' onChange={handleChange} value={formData.content} name="content" placeholder='enter your content' />
          <br />
          <input type="text" className='my-4' onChange={handleChange} value={formData.value} name="author" placeholder='enter author name' />
          <br />
          <button type='submit'>
            submit
          </button>

        </form>

      </div>

    </div>
  )
}
