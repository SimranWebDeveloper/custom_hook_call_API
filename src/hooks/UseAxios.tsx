import { useEffect, useState } from 'react'




// configObj props kimi bunlari isdiyir: axiosIntance, method, url, requestConfig ={} 
export default function UseAxios(configObj:any) {
    const { axiosIntance, method, url, requestConfig ={} }=configObj

    const [response,setResponse]=useState([])
    const [error,setError] =useState('')
    const [loading,setLoading] =useState(true)
    const [reloadBtn,setReloadBtn] =useState(true)

    useEffect(()=>{
        const controller =new AbortController()

        const fetchData = async()=>{

          try {
            const res =await axiosIntance[method.toLowerCase()](url,{
              ...requestConfig,
              signal:controller.signal
            
            });
            console.log(res);
            setError('');
            setResponse(res.data)

          } 
          catch (err:any) {
            console.log(err);
            setError(err.message)
          }
          finally{
            setLoading(false)
          }

        }
        fetchData()


        // useEffect cleanUp function
        return ()=>controller.abort()
    },[reloadBtn])



  return ([response,error,loading,setReloadBtn]  )
}

 
