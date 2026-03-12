import './App.css'

function App() {
    const profiles = [
      { 
        id: 1, 
        name: "Mark", 
        title: "Front-End developer", 
        bio: "I like to work with different front-end technologies and play video games."
      }, 

      { 
        id: 2, 
        name: "Tiffany", 
        title: "Engineering manager", 
        bio: "I have worked in tech for 15 years and love to help people grow in this industry." 
      }, 

      { id: 3, 
        name: "Doug", 
        title: "Back-End developer", 
        bio: "I have been a software developer for over 20 years and I love working with Go and Rust." 
      }
    ];
  return (
    <>
    <div className='flex-container'>
      {
        profiles.map(profile => (
          <Card key={profile.id} {...profile}/>
        ))
      }
    </div>
    </>
  );
}

export const Card = ({name, title, bio}) => {
  return(
    <div className='card'>
      <h2 className='card-title'>{name}</h2>
      <p className='card-title'>{title}</p>
      <p>{bio}</p>
    </div>
  );
}

export default App
