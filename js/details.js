console.log('details')
const description = document.querySelector('#desc');

const urlParams = new URLSearchParams(window.location.search);
// console.log(id);

const getIdFromSearchParams = (searchParams) => {
    const params = new URLSearchParams(searchParams)
    return params.get('id');
}

let id = getIdFromSearchParams(window.location.search);

console.log(id)

const loadData = (idofNote) => {
    return fetch(`http://localhost:8000/notes/${idofNote}`).then(res => res.json())
}

const render = (note) => {
    description.innerHTML += `<p> ${note.title} </p> <p> ${note.content} </p>`
}

loadData(id).then(n => {
    render(n);
})




