document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    const dataDiv = document.getElementById('data');
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'; // Example Dog API URL

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            dataDiv.innerHTML = ''; // Clear previous content
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Random Dog';
            img.style.maxWidth = '100%';
            dataDiv.appendChild(img);
        })
        .catch(error => {
            dataDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        });
}
