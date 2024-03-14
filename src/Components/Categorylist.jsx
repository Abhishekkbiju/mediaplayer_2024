import React, { useEffect, useState } from 'react'
import { getCategories, updateCategory } from '../server/allApis'
import { deleteCategories } from '../server/allApis'
import { toast } from 'react-toastify'
import { getSpecificVideo } from '../server/allApis'
import VideoCard from './VideoCard'


function Categorylist({ status }) {
    const [cat, setCat] = useState([])
    const [delStatus, setDelStatus] = useState({})

   useEffect(() => {
        getCat()
    }, [status, delStatus])

    const getCat = async () => {
        const res = await getCategories()
        console.log(res.data);
        setCat(res.data)
    }

  

    const handleDelete = async (id) => {
        const res = await deleteCategories(id)
        if (res.status >= 200 && res.status < 300) {  
            toast.success("Category Deleted Successfully!!")
            setDelStatus(res)

        }
        else {
            toast.error("Category Deletion Failed!!")
        }
    }

    const handleDrop=async(e,id)=>{
        console.log("catergory id:"+id)
        const vid=e.dataTransfer.getData("videoId")
        console.log("dropped video id:"+vid)
        let category=cat.find(item=>item.id==id)
        console.log(category)
        const res= await getSpecificVideo(vid)
        console.log(res.data)
        category.videos.push(res.data)
        console.log(category)
        const rescat=await updateCategory(category,id)
        if (rescat.status>=200 && rescat.status<300){

            toast.success(`${res.data.caption}is added to ${category.name}`)
            getCat()
            
        }
        else{
            toast.error("Video adding to category failed!!")
        }
        

    }
    const handleDragOver=(e)=>{
        e.preventDefault()
        console.log("Dragging Over Catergory")
        
    }
 return (
        <>
            <div className='border border-light p-3 mt-3'>
                {
                    cat ?
                        cat.map(item => (
                            <div className='bg-light mb-3 p-3 rounded shadow' onDragOver={e=>{handleDragOver(e)}} droppable onDrop={e=>{handleDrop(e,item?.id)}}>
                                <div>
                                <span>{item.name}</span>
                                <i className='fa-solid fa-trash float-end' onClick={() => { handleDelete(item.id) }} style={{ color: 'white' }}></i>

                            </div>
                            <div>
                                {
                                    item?.videos.map(v=>(
                                        <VideoCard video={v} cat={true}/>
                                    ))
                                }
                            </div>


                            </div>
                            
                                
                        ))
                        :
                        <h1>No Category</h1>
                }
            </div>
        </>
    )
}    

export default Categorylist