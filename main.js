// const arr = [1,2,3,4,45,100];
// // let sum = 0
// // arr.forEach(item => console.log(item, '+', sum, '=', sum += item))
// let sum = (array) => {
//     let sum = 0
//     array.forEach(element => {
//         console.log(sum, '+',element, '=', sum += element)
//         // sum += element
//     });
//     return sum;
// };

// // console.log(sum(arr))

// function minMax(min, max){
//     let sum = 0
//     for (min; min<=max; min++){
//         console.log(`${sum}+${min}=${sum+min}`)
//         sum += min
//     }
//     return sum;
// };
// // console.log(minMax(1, 8))

// let user = [
//     {name:'Ivan', age: 25, email: 'ivan@mail.ru'},
//     {name: 'Sanya', age: 35, email: 'sanya@yandex.ru'},
//     {name: 'Pasha', age: 40, email: 'pasha@rambler.ru'}
// ]
// user.forEach(person =>console.log(person.email))
// // user.map(person => console.log(person.email))
// // let filtredUser= user.filter(person => person.length >3);
// // console.log(filtredUser)
// // console.log(user)
// const numbers = ['a', 'v', 'c', 4]
// let sumofnumbers = numbers.reduce((sumof, numbers) => sumof + numbers, '');
// console.log(sumofnumbers);





// //
// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const INPUT = document.querySelector('input');
// function validateEmail(value) {
//   return EMAIL_REGEXP.test(value);
// }
// function updateInput() {
//   if (validateEmail(INPUT.value)) INPUT.style.borderColor = 'green';
//   else INPUT.style.borderColor = 'red';
// }
// INPUT.addEventListener('input', updateInput);

class Car{
    constructor(model, year, color){
        this.model = model
        this.year = year
        this.color = color
    }
    show(tezlik){
        console.log('bu ', this.model, ' meniki va bu ',tezlik,' da yura oladi');
    }
}

class UzAvto extends Car{
    constructor(model, year, color, place){
        super(model, year, color)
        this.place = place
    }
}
let car  = new Car('BMW', 2020, 'black');
let nexia = new UzAvto('nexia', 1998, 'white', 'Andijan');
// console.log(nexia)
// nexia.show(120)
// console.log(car.show(200));
// car.show(200)

class DatetoString{
    constructor(date){
        this.date = date
    }

}

class MovieCard{
    constructor(id, name, date, img, rate, urlForData, className){
        this.id = id
        this.name = name
        this.date = date
        this.img = img
        this.rate = rate
        this.urlForData = urlForData
        this.className = className
    }
    
    dateToString(date){
        let newDate = new Date(date).toDateString().slice(4);
        return newDate;
    }
    elemForCard(){
        let newdate = this.dateToString(this.date);
        let element = `<div div class="movies_card" >
                    <a href="#" class="movies_more">...</a>
                    <a href="movieinfo.html"  onclick="toLocal('movieId', '${this.id}')"><img src="https://image.tmdb.org/t/p/w185/${this.img}" alt="movie" class="movies_bg" width="150px" height="230px" "></a>
                    <h4 class="movies_title">${this.name}</h4>
                    <p class="movies_date">${newdate}</p>
                    <div class="progres">
                        <div class="radial-progress">
                            data-progress="${this.rate}"
                        </div>
                    </div>
                </div>
            `;
        return element;
    }
     getData(){
        let self = this;
        let block = document.querySelector(this.className);
        fetch(this.urlForData)
            .then(response => response.json())
            .then(function(res){
                res.results.map(function(item) {
                    // console.log(item.title);
                    // let elem = self.elemForCard();
                    let element = `<div div class="movies_card" >
                    <a href="#" class="movies_more">...</a>
                    <a href="movieinfo.html"  onclick="toLocal('movieId', '${item.id}')"><img src="https://image.tmdb.org/t/p/w185/${item.poster_path}" alt="movie" class="movies_bg" width="150px" height="230px" "></a>
                    <h4 class="movies_title">${item.title}</h4>
                    <p class="movies_date">${item.release_date}</p>
                    <div class="progres">
                        <div class="radial-progress">
                            data-progress="${item.vote_average *10}"
                        </div>
                    </div>
                    </div>
                    `;
                    console.log(element);
                    // block.innerHTML += `<h4> ${item.title}</h4>` 
                    block.innerHTML += element; 

                });
                console.log(res.results)
            })
    }
    getInfo(){
        let self = this;
        let block = document.querySelector(this.className);
        fetch(this.urlForData)
            .then(response => response.json())
            .then(function(res){
                res.results.map(function(item) {
                    // console.log(item.title);
                    // let elem = self.elemForCard();
                    let elem = self.elemForCard();
                    
                    console.log(elem);
                    // block.innerHTML += `<h4> ${item.title}</h4>` 
                    // block.innerHTML += element; 

                });
                console.log(res.results[0])
            })
    }
   

}


const movies = "https://api.themoviedb.org/3/movie/popular?api_key=d9835bf16b133db7ae35ff2b1e08b533&language=en-US&page=1";
// MovieCard.fetchUrl(movies, 'dfs');
let as = new MovieCard('id', 'title', 'release_date', 'backdrop_path', 'rate',movies, '.movie');
as.getData()
// as.getInfo()
// as.getData(movies, '.movie');
// export default MovieCard;


let data = new Date;
let soat =document.querySelector('.hour');
soat.innerHTML = data.toLocaleDateString();
console.log(soat.toLocaleDateString())