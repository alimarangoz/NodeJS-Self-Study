const posts = [
    {head:'Post 1', content: "First Post Content"},
    {head:'Post 2', content: "Second Post Content"},
]

function takePost(){
    setTimeout(() => {
    let output = '';
    posts.forEach(post => {
        output += `<li>${post.head}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
    
}
/* */
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error){
                resolve();
            }else{
                reject("Opps! Error occured!");
            }
        }, 2000);
    })
}

/* createPost methodu bitmeden takePost() çalışır bu da asenkronluğa sebep olur */
createPost({head:"Post 3", content:"Third Post Content"}).then(takePost).catch(err  => {
    console.log(err)
});
//takePost();

/* Tüm promiseleri tek seferde alabiliyoruz promise.all() ile. */ 
const promise1 = Promise.resolve("OK!");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,3000,'mesaj'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values));

fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()
).then(json => console.log(json));

async function PostTake(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    const data = await response.json();
    console.log(data);
}
PostTake(); 