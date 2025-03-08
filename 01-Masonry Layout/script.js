


// fetch('https://api.pexels.com/v1/search?query=indian+wedding+couple&per_page=5000&page=1', {
//     headers: {
//       Authorization: 'Uqm4D8T9NRCMZW2uTDKYtuHe2q1dQj3f2gWdI05ekSmPg0BiKNvj9Bez'
//     }
//   })
// .then(response => response.json())
// .then(data => {
//     // Process the data and display images
//     // console.log(data.photos);


//     const gallery = document.getElementById('gallery');
//     data.photos.forEach(photo => {
//         const img = document.createElement('img');
//         img.src = photo.src.medium; // Use medium size
//         img.alt = photo.alt; // Set alt text
//         gallery.appendChild(img);
//     });
//   })
//   .catch(error => console.error('Error fetching images:', error));
  


  async function fetchMultiplePages() {
    let allPhotos = [];
    const imageContainer = document.getElementById("gallery"); // Target the div where images will be displayed
  
    for (let page = 1; page <=10; page++) {  // Fetching 2 pages (80 * 2 = 160 images)
      const response = await fetch(`https://api.pexels.com/v1/search?query=indian+wedding+couple&per_page=80&page=${page}`, {
        headers: { Authorization: 'Uqm4D8T9NRCMZW2uTDKYtuHe2q1dQj3f2gWdI05ekSmPg0BiKNvj9Bez' }
      });
  
      const data = await response.json();
      allPhotos = allPhotos.concat(data.photos);
    }
  
    // Render images on the webpage
    allPhotos.forEach(photo => {
      const imgElement = document.createElement("img");
      imgElement.src = photo.src.medium;  // Use 'large' or 'original' for high quality
      imgElement.alt = photo.photographer; 
      imgElement.style.width = "250px"; // Adjust size as needed
    //   imgElement.style.margin = "10px";
  
      imageContainer.appendChild(imgElement);
    });
  }
  
  // Call function on page load
  fetchMultiplePages();

  