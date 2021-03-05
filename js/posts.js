fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    
        data.forEach((element) => {
            const userId = element.userId;
            const postId = element.id;
            const postTitle = element.title;
            const postText = element.body;

            const tableBody = document.getElementById("tableBody");
            const tableRow = `<tr><th scope ="row" class = "tdposts">${userId}</th><td class = "tdposts">${postId}</td><td>${postTitle}</td><td>${postText}</td></tr>`;
            tableBody.innerHTML += tableRow;
            
        });
    })    

    .catch((error) => {
        console.error(error.message);
    });
