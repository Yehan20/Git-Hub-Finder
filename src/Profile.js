const Profile = ({user}) => {
    let year= (user.created_at).split("T");
    console.log(year);
    return ( <>
         <div className="rounded rounded-2xl flex gap-x-2  bg-lmText p-3 text-white">
            <div className="col-1 px-3 space-x-2">
                 <img src={user.avatar_url} alt="Profile img" className="rounded-full block h-20 w-20" />
            </div>
            <div className="col-2  rounded flex flex-col space-x-5 space-y-5  px-5 pb-3 w-100  rounded-1xl ">
                <div className="flex mb-3 ">
                    <div className="w-full">
                        <h2 className="mb-3">{user.name}</h2>
                        <h4 className="mb-3 text-blue-800">{user.login}</h4>
                        <p className="font-light">{user.bio}</p>
                    </div>

                    <h3 className="w-full text-right text-white text-sm">
                        Joined {year[0]}
                    </h3>
                </div>

                <div style={{marginLeft:0}} className="flex mt-2 py-2 justify-around  gap-x-2 rounded rounded-1xl  bg-lmTextalt">
                    
                   <div>
                       <h5 className="text-xs">Repos</h5>
                       <p className="font-bold text-2xl">{user.public_repos}</p>
                   </div>
                   <div>
                       <h5 className="text-xs">Follwers</h5>
                       <p className="font-bold text-2xl">{user.followers}</p>
                   </div>
                   <div>
                       <h5 className="text-xs">Following</h5>
                       <p className="font-bold text-2xl">{user.following}</p>
                   </div>
              
                </div>
        
            </div>
         </div>
    </>);
}
 
export default Profile;