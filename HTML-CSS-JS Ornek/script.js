function add(){
    let firstValue = parseInt(document.getElementById("1").value);
    let secondValue = parseInt(document.getElementById("2").value);
    let total = firstValue + secondValue;
    document.getElementById("pid").innerHTML = total;
    
}

/* ARROW FUNCTION */


/*Double parameter arrow function*/
substraction = (first,second) => {
    return first-second;
}
console.log("Substraction: " + substraction(5,3));

/* Single parameter arrow function */
square = power =>{
    return power*power;
}
console.log("Power of 5 is: "+square(5));

/* No parameter arrow function */
hello = () => {
    return "Hello";
}
console.log(hello());

/* If the function returns just one item, you don't need to use blocks */
sayMyName = myName => myName;
console.log("My name is: "+ sayMyName("Ali"));

/* JS Async */

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
/* callback methodu ile değerleri ekledikten sonra tekrar posta gidip değer ekleyebiliyoruz bu şekilde asenkronluktan kurtulabiliyoruz */
function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

/* createPost methodu bitmeden takePost() çalışır bu da asenkronluğa sebep olur */
createPost({head:"Post 3", content:"Third Post Content"},takePost);
takePost();