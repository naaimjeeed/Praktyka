import './App.css';

export function MoodBoard() {
  const destinations = [
    {
      id: 1,
      color: "Brown",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Pathway"
    },

    {
      id: 2,
      color: "Blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Shore"
    },

    {
      id: 3,
      color: "Green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Grass"
    }
  ]
  return (
    <div>
      <h1 className='mood-board-heading'>Destination Mood Board</h1>
      <div className='mood-board'>
        {
          destinations.map(destination => (
            <MoodBoardItem key={destination.id} {...destination}/>
          ))
        }
      </div>
    </div>

  )
}


export const MoodBoardItem = ({color, image, description}) => {
  return (
    <div className='mood-board-item' style={{backgroundColor: color}}>
      <img className='mood-board-image' src={image}/>
      <h3 className='mood-board-text'>{description}</h3>
    </div>
  )
}

export default MoodBoard;
