import { useState } from 'react';
import './index.css';
import "./App.css";
import searchIcon from "./assets/icon-search.svg"
import loader from  "./assets/loading.gif";
import Profile from './Profile';
import useGithub from './useGithub';
function App() {

   const{ clientid,clientsecret,repos_count,repos_sort}= useGithub();
   
   const [users,setUsers]=useState(null)
   const [repos,setRepos]=useState(null);
   const [search,setSerach]=useState("");
   const [error,setError]=useState(null);
   const [loading,setLoading]=useState(false);
   const [empty,setEmpty]=useState(false);
   const [border,setBorder]=useState("none")

   
   const getUsers=async(userId)=>{

      setLoading(true);

      if(userId!==''){
       
         setEmpty(false)
          try {
            setUsers(null);
            const profile =await  fetch(`https://api.github.com/users/${userId}?clientid=${clientid}&clientsecret=${clientsecret}`);


            const profileResponse =await profile.json()
    
            const repo = await fetch(`https://api.github.com/users/${userId}/repos?per_page=${repos_count}&sort=${repos_sort}&clientid=${clientid}&clientsecret=${clientsecret}`)
    
            const repoResponse = await repo.json();
            if(!repo.ok || !profile.ok){
               throw new Error("Wrong Id")
            }
        
            if(repo.status===403){
               throw new Error("Limit Excceded")
            }
            setTimeout(()=>{
               setRepos(repoResponse);
               setUsers(profileResponse)
               setLoading(false);
            },1000)  
            

            
         } catch (e) {       
            setError("404 Wrong Id");
            setLoading(false);        
         }
   
      }
      else {
         setTimeout(()=>{
            setUsers(null)
            setEmpty(true)
            setLoading(false)
            setBorder("3px solid red")
         },1000)
   
      }
   }


   const viewUsers=(userId)=>{
         // setLoading(true);
         getUsers(userId);  
   }


  return (
     <main className='app'>
        <div className="max-w-2xl container mx-auto py-3 px-2 flex flex-col">
           <div className="col mb-3 flex justify-between">
              <h1 className=' sm:text-left text-center w-full text-xl'>Git-Hub Searcher</h1>
           </div>

           <div className="flex rounded mb-3 searchArea  rounded-2xl bg-light bs p-3" style={{outline:border}}>
              <div className="flex grow space-x-1 items-center xs:px-2">
                 <img  src={searchIcon} alt="" />
                 <input type="text" id='' onChange={(e)=>{
                    setSerach(e.target.value);
                    setError(null)
                    setBorder("none");
                   
                    if(e.target.value===''  ||  e.target.value.length<search.length ||  e.target.value.length>search.length)setUsers(null)
                 }} className="grow  py-2 searchArea focus:outline-none text-black " placeholder='Search users' />
              </div>
              <button onClick={()=>viewUsers(search)} className="bg-blue-500 inline-block rounded-1xl  text-sm sm:text-base hover:bg-blue-700 text-white font-bold py-2 px-2 sm:px-4 rounded">
               Search
           </button>
           </div>

           {users && <Profile user={users} repos={repos}/>}
       
           {loading && <img src={loader} className="d-block mx-auto w-20 h-20" alt="" />}
           </div>

           {error && <p className='text-2xl mt-2 text-center'>{error}</p> }

           {empty && <p className='text-2xl mt-2 text-red-800 text-center'>Enter A User Name</p> }
           <div>
            
        </div>
     </main>
  );
}

export default App;
