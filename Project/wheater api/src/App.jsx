import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Check if data is an array before mapping over it
        if (Array.isArray(data)) {
          setImages(data.map(item => item.images)); // Extracting all image URLs from the API response
        } else {
          console.error("Data received from API is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default App;
