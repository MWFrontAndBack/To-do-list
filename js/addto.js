let form = document.querySelector('#addform');

let element1 = form.elements[0];
let element2 = form.elements[1];



const handleSubmit = (event) => {

    const note = {
        title: element1.value,
        content: element2.value,
    }
    event.preventDefault()
    fetch('http://localhost:8000/notes/', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(note)
    })
    window.location = "index.html"

}

form.addEventListener("submit", handleSubmit)