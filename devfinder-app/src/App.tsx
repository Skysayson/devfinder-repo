import {useState} from "react";
import Finder from "./components/FinderBar";
import FinderBox from "./components/FinderBox";

function App() {
  const [userData, setUserData] = useState(null);

  // Function to set user data in App.tsx
  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div className="flex flex-col">
      <h5 className="text-white opacity-5font-[Source Code Pro] text-[3rem] flex pb-[1.5rem]">
        Git.Finder
      </h5>
     <Finder handleUserData={handleUserData}></Finder>
     {userData ? ( <FinderBox
        ProfilePic={userData?.avatar_url}
        ProfileName={userData?.login}
        Location={userData?.location}
        Twitter={userData?.twitter_username}
        Repos={userData?.public_repos}
        Bio={userData?.bio}
        Followers={userData?.followers}
        Following={userData?.following}
        Blog={userData?.blog}
        Org={userData?.company}
        Create={userData?.id}
      /> ) : null}
    </div>
  );
}

export default App;
