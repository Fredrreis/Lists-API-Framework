fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        data.forEach((element) => {
            const userId = element.userId;
            const albumId = element.id;
            const albumTitle = element.title;

            const tableBody = document.getElementById("tableBody");
            const tableRow = `<tr><th scope ="row" class = "tdalbums">${userId}</th><td class = "tdalbums">${albumId}</td><td class = "tdalbums">${albumTitle}</td></tr>`;
            tableBody.innerHTML += tableRow;
            
        });
    })    

    .catch((error) => {
        console.error(error.message);
    });