fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then(datos => {
    var agr = '<div></div>'
    for (let comentario of datos){
        agr += `<p class="email">${comentario.email}</p>
        <p class="comentario">${comentario.body}</p>`
    }
    document.getElementById("partetres").innerHTML= agr
});


