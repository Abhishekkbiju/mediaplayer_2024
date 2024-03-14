import React, { useEffect,useState } from 'react'
import { getHistory } from '../server/allApis'
import { deleteHistory } from '../server/allApis'
import { toast } from 'react-toastify'

function History() {
  const [his,setHis]=useState([])
  const [delStatus, setDelStatus] = useState({})

  useEffect(() => {
    getData()
}, [ delStatus])
  
   

    const getData=async()=>{
      const res=await getHistory()
      console.log(res.data)
      setHis(res.data)
    }

    const handleDelete = async (id) => {
      
      const res = await deleteHistory(id)
      
      // if (res.status >= 200 && res.status < 300) {  
      //     toast.success("History Deleted Successfully!!")
          setDelStatus(res)

      // }
      // else {
      //     toast.error("History Deletion Failed!!")
      // }
  }

  
  
  return (
    <>
     <div className='p-5'>
      <h1>Watch History</h1>
      <table className='table table-bordered'>
          <tr>
            <th>Caption</th>
            <th>Url</th>
            <th>Date & Time</th>
          </tr>

          {
            his?
            his.map(item=>(
             <tr>
              <td>{item.caption}</td>
              <td>{item.url}</td>
              <td>{item.datetime}</td>
              <td> <i className="fa-solid fa-trash " onClick={()=>{handleDelete(item.id)}} style={{color: 'white'}}></i></td>
              </tr>

            ))
            :
            <tr>
              <p>No History</p>
            </tr>
          }
      </table>

     </div>
    </>
  )
}

export default History