import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData"


function App() {
  // State hook to manage the satellite data
  const [sat, setSat] = useState(satData);

  // Extracting unique orbit types from the satellite data
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  // console.log(displaySats);
  // console.log(sat);

  // Function to filter satellites based on orbit type
  const filterByType = (currentType) => {
    // Using filter to create a new array with satellites matching the specified orbit type
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    // Updating the sat state to display the filtered satellite data
    setSat(displaySats);
  };

  return (
    <>
      <Banner />

      {/* Displaying the Buttons component with props */}
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      {/* Displaying the Table component with the current satellite data */}
      <Table sat={sat} />
    </>
  );
}

export default App;