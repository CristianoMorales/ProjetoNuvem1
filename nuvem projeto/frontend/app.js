const backendUrl = '/api/data';

function fetchData() {
    fetch(backendUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
}

function displayData(data) {
    const messageElement = document.getElementById('message');
    const timestampElement = document.getElementById('timestamp');

    messageElement.textContent = data.message;
    timestampElement.textContent = `Timestamp: ${data.timestamp}`;
}

window.onload = fetchData;