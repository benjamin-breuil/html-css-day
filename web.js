console.log("bonjour le navigateur")
let flexbox1 = document.getElementById('fb1')

flexbox1.innerText = 'salut les gars'  

flexbox1.addEventListener('click', function(){
flexbox1.innerText = 'salut les filles'  
let articles = document.getElementsByTagName('article')

for (const article of articles) {
    article.style.backgroundColor = 'red'
}

})