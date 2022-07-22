import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(resp => setPlants(resp))
  }, [])

  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  const searchResults = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
})
  
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} handleSearch={setSearch} />
      <PlantList plants={searchResults}/>
    </main>
  );
}

export default PlantPage;
