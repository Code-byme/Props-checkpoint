import './App.css';
import Profile from './profile/Profile';

function App() {
  return (
    <div className="App">
   <Profile fullName="Amine FADILI" bio="I am a software developer" profession="Developer" 
   handleName={(name) => alert(`Userame: ${name}`)} >
    <img src="me.jpeg" alt="profile-picture"/>
  </Profile>
    </div>
  );
}

export default App;
