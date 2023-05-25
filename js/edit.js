let form = document.querySelector('#addform');

let element1 = form.elements[0];
let element2 = form.elements[1];

const urlParams = new URLSearchParams(window.location.search);
// console.log(id);

const getIdFromSearchParams = (searchParams) => {
    const params = new URLSearchParams(searchParams)
    return params.get('id');
}
let id = getIdFromSearchParams(window.location.search);
const loadData = (idofNote) => {
    return fetch(`http://localhost:8000/notes/${idofNote}`).then(res => res.json())
}


const implementform = (n) => {
    element1.value = n.title
    element2.value = n.content
}


loadData(id).then(n => implementform(n))

const handleSubmit = (event) => {

    const note = {
        title: element1.value,
        content: element2.value,
    }
    event.preventDefault()
    fetch(`http://localhost:8000/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(note)
    })
    window.location = "index.html"

}

form.addEventListener("submit", handleSubmit)