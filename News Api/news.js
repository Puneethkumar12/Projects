// Api - 65671a2013dd423484705803a10f6088 

//Intialize the news paramteres
let source = 'the-times-of-india'
const API_KEY = "65671a2013dd423484705803a10f6088 "

//geting the element 
let newsaccordian = document.getElementById('newsaccordian');
//&sources=${source}

//  create an ajax get request 
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`,true)
// xhr.getResponseHeader('Content-type','application/json')


//Next if response is ready
xhr.onload = function () {
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles);
        let newsHTML = ""
        articles.forEach(function (element,index) {
            console.log(element,index);
            
            let news = `
    <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
           <strong><i>Breaking News ${index+1}</i></strong> : ${element.title}
            </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsaccordian">
            <div class="accordion-body">
            ${element.content} 
            <a href="${element.url}" target="_blank">Read more here</a>
            </div>
        </div>
    </div>`

    newsHTML += news
        } );
        newsaccordian.innerHTML = newsHTML
    }
    else {
        console.log('Error Occured');
    }
}
xhr.send()

