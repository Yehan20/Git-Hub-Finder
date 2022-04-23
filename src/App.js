import { useEffect, useState } from 'react';
import './index.css';
import "./App.css";
import searchIcon from "./assets/icon-search.svg"
import Profile from './Profile';
import useGithub from './useGithub';
function App() {
   const{ clientid,clientsecret,repos_count,repos_sort}= useGithub();
   const [users,setUsers]=useState(null)
   const [repos,setRepos]=useState(null);
   const [search,setSerach]=useState("");

   const getUsers=async(userId)=>{
        const profile =await  fetch(`https://api.github.com/users/${userId}?clientid=${clientid}&clientsecret=${clientsecret}`);

        const profileResponse =await profile.json()

        const repo = await fetch(`https://api.github.com/users/${userId}/repos?per_page=${repos_count}&sort=${repos_sort}&clientid=${clientid}&clientsecret=${clientsecret}`)

        const repoResponse = await repo.json();
        
        setRepos(repoResponse);
        setUsers(profileResponse)

   }

   // useEffect(()=>{
   //    viewUsers(search);

   // },[search])

   const viewUsers=(userId)=>{
      if(userId!==' ' || userId!=''){
         getUsers(userId);
      }
   }

  return (
     <main className='app'>
        <div className="max-w-2xl container mx-auto py-3 px-2 flex flex-col">
           <div className="col mb-3 flex justify-between">
              <h1 className='text-white text-xl'>devfinder</h1>
              <a className='text-white'>Light<svg width="20" className="relative left-2 top-1 -mt-3 inline-block" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" /></svg></a>
           </div>
           {/* search bar coloumn */}
           <div className="flex rounded mb-3  rounded-2xl bg-lmText p-3">
              <div className="flex grow space-x-5 items-center px-2">
                 <img  src={searchIcon} alt="" />
                 <input type="text" onKeyUp={(e)=>{
                    viewUsers(e.target.value);
                 }} className="grow bg-lmText py-2 focus:outline-none text-white " placeholder='Serach users' />
              </div>
              <button className="bg-blue-500 rounded-1xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Search
           </button>
           </div>

           {users && <Profile user={users} repos={repos}/>}
        </div>
     </main>
  );
}

export default App;
