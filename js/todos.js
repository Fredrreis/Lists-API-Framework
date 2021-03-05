fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    
        data.forEach((element) => {
            const userId = element.userId;
            const todosId = element.id;
            const todosTitle = element.title;
            const todosCompleted = element.completed;

            const tableBody = document.getElementById("tableBody");
            const tableRow = `<tr><th scope ="row" class = "tdtodos">${userId}</th><td class = "tdtodos">${todosId}</td><td class="tdtodos">${todosTitle}</td><td class = "tdtodos">${todosCompleted}</td></tr>`;
            tableBody.innerHTML += tableRow;
            
        });
    })    

    .catch((error) => {
        console.error(error.message);
    });
