import React from 'react';
import {Profile} from "./profile/Profile"
function App() {
  const handleName = name => alert (name);
  return (
    <div>
    <Profile fullName="Salhi KHALIL" 
    bio="nothing special... just ME :)" 
    profession="to be a good web developer...soon " handleName={handleName}>
      https://avatars.githubusercontent.com/u/82417339?s=400&u=c4a1834fd3d93f469b7fa5e1c794e1d95620533e&v=4
      </Profile>

    </div>
  );
}

export default App;
