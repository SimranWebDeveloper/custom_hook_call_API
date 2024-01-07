import { useEffect, useState } from 'react'


// configObj props kimi bunlari isdiyir: axiosIntance, method, url, requestConfig ={} 
export default function UseAxiosFunction() {

    const [response,setResponse]=useState([])
    const [error,setError] =useState('')
    const [loading,setLoading] =useState(false)
    const [controller,setController] =useState<any>()

    const axiosFetch=async (configObj:any) => {
        const { axiosIntance, method, url, requestConfig ={} }=configObj;


        try {
            setLoading(true)
            const ctrl=new AbortController()
            setController(ctrl)
            const res =await axiosIntance[method.toLowerCase()](url,{
              ...requestConfig,
              signal:ctrl.signal
            
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

    useEffect(()=>{
        console.log(controller);
        
        // useEffect cleanUp function
        return ()=>controller && controller.abort();
    },[controller])



  return ([response,error,loading,axiosFetch]  )
}

 
