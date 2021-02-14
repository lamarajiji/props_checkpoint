import './App.css';
import Profile from './profile/Profile';
import image from './assets/photo.jpg'
function App() {

  const handleName=(name)=>{
    alert(`Hi, this is ${name} profile!!!`)

}
  return (
    <div className="App" style={{textAlign:'center',border:"1px solid black",padding:"5px", verticalAlign:'center', color:'white'}}>
  <Profile fullName='Malki Hajer '
   bio='Arianna Huffington est une femme d’affaires et est notamment célèbre pour avoir fondé le site d’actualités le Huffington Post.

   Née en Grèce, elle a suivi des études d’économie à Cambridge en Angleterre, puis décide à 25 ans de s’installer aux Etats-Unis.
   
   Ce n’est qu’en 2005, à l’âge de 55 ans, qu’elle fonde le Huffington Post, et le succès est très rapidement au rendez-vous.
   
   Ce site d’actualités est désormais décliné dans plusieurs pays et dans plusieurs langues, ce qui lui offre un rayonnement international.
   
  '
  profession='PDG' handleName={handleName}>

  
  <div>
   
   <img src={image} alt="image" style={{ margin: "20px" }}/>
  </div>
  </Profile>
 
    </div>
  );
}

export default App;
