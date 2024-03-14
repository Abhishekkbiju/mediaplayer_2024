import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-light w-100 d-flex flex-column justify-content-center '>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media player 2024</h4>
            <p style={{textAlign:'justify'}}>Paragraphs are the building blocks of papers. Many students define paragraphs in terms 
            of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, 
            though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined
             as “a group of sentences or a single sentence that forms a unit”</p>

          </div>
          <div className='col'>
            <h4>Links</h4>
            <a href="/land"  style={{color:'aqua'}}>Landing</a><br />
            <a href="/dash"  style={{color:'aqua'}}>Dashboard</a><br />
            <a href="/his"  style={{color:'aqua'}}>History</a>
          </div>
          <div className="col">
            <h4>References</h4>
            <a href="https://getbootstrap.com/" target='_blank' style={{color:'aqua'}}>Bootstarp</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'aqua'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{color:'aqua'}}>React</a>
          </div>

          </div>
          <div className='text-center'>
            <p>&copy;Media player 2024</p>
          </div>
        </div>
    
  )
}

export default Footer