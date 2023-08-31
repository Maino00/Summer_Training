// Task 1
const baseUrl = 'https://jsonplaceholder.typicode.com/albums';
var response = fetch(baseUrl);
response.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${data[0].id}`)
        .then((respo) => {
            return respo.json();
        })
        .then((data) => {
            console.log(data);
        });
}).catch((err) => {
    console.log("Failed to load");
});