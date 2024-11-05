import { useState, useEffect } from "react";
import "./App.css";
import apiCalling from "./api-calling"; // Ensure this is correct
import Card from "./Components/Card";

function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    apiCalling()
      .then((response) => {
        setData(response.results); // Accessing the 'results' array from the response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data ? (
        data.map((result, index) => {
          return (
            <Card
              key={index}
              name={result.name}
              photo={result.picture.large}
              country={result.location.country}
            />
          );
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
