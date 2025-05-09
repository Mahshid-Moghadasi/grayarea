


function getCuteCat(button) {
    // Append " Meow" to the button's text
    button.innerText += " meow";

    fetch ('https://cataas.com/cat?json=true') // Get random cat metadata
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 

            var cat_image = data.url; // Get the image URL from the JSON data

            // Create an <img> element
            var imgElement = document.createElement('img');

            // Set the src attribute to the image URL
            imgElement.src = cat_image;

            // Optionally, add alt text
            imgElement.alt = "Cat Image";

            // Append the <img> element to a specific container in your HTML
            document.getElementById('image-container').appendChild(imgElement);

        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}