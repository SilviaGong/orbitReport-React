import "./styling.css";
import satData from "./satData"


const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className="flex-container">
      {
        displaySats.map((type, id) => {
          // console.log(type);
          return (
            <button onClick={() => filterByType(type)} key={id}>
              {type} Orbit
            </button>
          );
        })
      }
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
    //code continues
  );
};

export default Buttons;