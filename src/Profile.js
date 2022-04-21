const Profile = ({user}) => {
    let year= (user.created_at).split("T");
    console.log(year);
    return ( <>
         <div className="rounded rounded-2xl flex flex-col bg-lmText p-3 text-white">
            <div className="col-1 flex space-x-2">
                 <img src={user.avatar_url} alt="Profile img" className="rounded-full  h-10 w-10" />
                 <div>
                     <h2 className="mb-3">{user.name}</h2>
                     <h4 className="mb-3">{user.login}</h4>
                     <p className="font-light">{user.bio}</p>
                 </div>
                 <h3 className="text-white text-lg">
                     Joined {year[0]}
                 </h3>
            </div>
            <div className="col-2 self-center rounded p-3  rounded-1xl  bg-lmTextalt">
               <div className="flex">
                   <div>
                       <h5>Repos</h5>
                       <p>{user.public_repos}</p>
                   </div>
                   <div>
                       <h5>Follwers</h5>
                       <p>{user.followers}</p>
                   </div>
                   <div>
                       <h5>Repos</h5>
                       <p>{user.public_repos}</p>
                   </div>
               </div>
            </div>
         </div>
    </>);
}
 
export default Profile;