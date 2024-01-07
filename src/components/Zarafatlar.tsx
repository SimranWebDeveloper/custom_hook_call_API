import useAxios from '../hooks/UseAxios'
import axiosFirst from '../apis/dadJokes'

// configOb-ee props kimi bunlari gonderirik: axiosIntance, method, url, requestConfig ={} 

export default function Zarafatlar() {
    const [joke ,error, loading,setReloadBtn]:any=useAxios({
       axiosIntance:axiosFirst,
       method:'GET',
       url:'/',
       requestConfig:{
           headers:{
               'Content-Type':'en-US'
           }
       } 
    })
    console.log(joke.joke);
    
  return (
    <div>
      <h2>Sen Zarafatlar</h2>

      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && joke && <p>{joke.joke}</p>}
      {!loading && !error &&  !joke && <p>Hec bir zarafat yoxdur</p>}

      <button style={{background:'red',color:'white'}} onClick={()=>setReloadBtn((flag:boolean)=>!flag)}>new Joke</button>

    </div>
  )
}
