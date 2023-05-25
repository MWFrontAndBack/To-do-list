console.log('script')

const lista = document.querySelector("#todo");
let notes = []

const loadNotes = () => {
    return fetch(`http://localhost:8000/notes`)
        .then(res => res.json())
}


const deletehadle = (n) => {
    document.getElementById(n).remove();

}




const render = (n) => {
    console.log(n)
    lista.innerHTML += `<li id=${n.id}>  <h2> ${n.title}</h2> <p>${n.content} </p>   <button onclick="deletehadle(${n.id})"> delete </button>  <a href='details.html?id=${n.id}'>details</a>   <a href='edit.html?id=${n.id}'>edit</a></li>`

}

loadNotes().then(n => {
    n.forEach(note => {
        render(note)
    })
})


