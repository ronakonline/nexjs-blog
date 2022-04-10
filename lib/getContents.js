export function getPosts(){
    return fetch('https://gorest.co.in/public/v2/posts')
    .then(response => response.json())
    .then(json => json)
}

export function getPost(id){
    return fetch('https://gorest.co.in/public/v2/posts/'+id)
    .then(response => response.json())
    .then(json => json)
}