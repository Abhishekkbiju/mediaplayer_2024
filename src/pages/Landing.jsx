import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
      <div className='row p-5 shadow'>
        <div className='col d-flex flex-column justify-content-center'>
         <h3>Media Player 2024</h3>         
         <p>explore media player for youtube videos for uploading and managing.Users can add and manage videos,categories and even check the history</p>
       <div>
       <Link to={'/dash'} className='btn btn-primary'>Explore </Link>
       </div>
        </div>
        <div className='col'>
          <img src="https://i.pinimg.com/originals/e4/63/4d/e4634da841c0ed906e77cab9b6b733ef.gif" 
          className='img-fluid' alt="img" />
        </div>

      </div>
    </div>
    <div className='mt-3 p-5'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex mt-2 flex-row justify-content-between'>

      <div class="card" style={{width: '20rem'}}>
     <img src="https://media0.giphy.com/media/0flZuODmR5jnjyCslS/giphy.webp?cid=790b7611oy4heemztme1dscnhej9sc75ngsg7v34slt07s6c&ep=v1_gifs_search&rid=giphy.webp&ct=g"style={{height:'250px'}} className="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">Upload Videos</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
     </div>
     </div>
       
     <div class="card" style={{width: '20rem'}}>
     <img src="https://media1.tenor.com/m/lqU1_OZ9B0EAAAAC/spongebob-seulisasoo.gif" style={{height:'250px'}} className="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">Watch Videos</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
     </div>
     </div>

     <div class="card" style={{width: '20rem'}}>
     <img src="https://media.tenor.com/bmSpDqHjQtMAAAAj/sherlock-holmes-investigate.gif" style={{height:'250px'}}  className="card-img-top" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">View History</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     
     </div>
     </div>

      </div>

    </div>
    <div className='mt-5 d-flex justify-content-center-between flex-row align-items-center p-5'>
      <div className='col'>
        <h2>Simple,Fast & Secured</h2>
        <p style={{textAlign:'justify'}}> Media player 2024 is a platform for simple and faster version of youtube videos for uploading and mangement
        ,it includes video watch history too where you get a simple video player interface with the app itself.......</p>
      </div>
      <div className='col'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fGOTVne2Tkw?si=TRU7NKkkJR9byw1L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
    
    </>
  )
}

export default Landing