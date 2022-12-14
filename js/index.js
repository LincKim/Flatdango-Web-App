const MOVIES = 'http://localhost:3000/films'

document.addEventListener('DOMContentLoaded', () => {
    
        function defaultMovie(poster, title, runtime, showtime, tickets_sold, capacity, description) {
            const movieOne = document.createElement('div')
            movieOne.classList.add('card', 'col-3')

            const supportDiv = document.createElement('div')
            supportDiv.classList.add('card', 'col-12', 'p-2')

            const moviePoster = document.createElement('img')
            moviePoster.src = poster

            const movieTitle = document.createElement('h3')
            movieTitle.innerText = title

            const movieRuntime = document.createElement('p')
            movieRuntime.innerText = `Runs for: ${runtime} mins`

            const movieShowtime = document.createElement('p')
            movieShowtime.innerText = `Time: ${showtime}`

            const theaterCapacity = document.createElement('p')
            theaterCapacity.textContent = `Theater Capacity: ${capacity}`

            const movietickets_sold = document.createElement('p')
            movietickets_sold.innerText = `Tickets Sold: ${tickets_sold}`

            const movieDescript = document.createElement('p')
            movieDescript.textContent = `Description: ${description}`

            const buyingTicket = document.createElement('button')
            buyingTicket.textContent = `Buy Ticket`

            let c = capacity
            let b = tickets_sold

            buyingTicket.addEventListener('click', () => {
               if (c === b){
                alert('Tickets sold out!')
               }else {
                    b++
                    movietickets_sold.innerText = `Tickets Sold: ${b}`
               }
               
            })
           
            movieOne.appendChild(supportDiv)
            supportDiv.appendChild(moviePoster)
            supportDiv.appendChild(movieTitle)
            supportDiv.appendChild(movieRuntime)
            supportDiv.appendChild(movieShowtime)
            supportDiv.appendChild(theaterCapacity)
            supportDiv.appendChild(movietickets_sold)
            supportDiv.appendChild(movieDescript)
            supportDiv.appendChild(buyingTicket)

                
            return movieOne
        }
    function getMovies() {
     fetch(MOVIES)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const filmData = data[0]
            const poster = filmData.poster
            const title = filmData.title
            const runtime = filmData.runtime
            const showtime = filmData.showtime
            const capacity= filmData.capacity
            const description = filmData.description
            const tickets_sold = filmData.tickets_sold
            const filmElement = defaultMovie(poster, title, runtime, showtime, tickets_sold, capacity, description)
            document.getElementById('main').appendChild(filmElement)
        
        })
    }
    getMovies()

    function getAllElements () {
        fetch(MOVIES)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.forEach((data) => {
            const filmData = data
            const poster = filmData.poster
            const title = filmData.title
            const runtime = filmData.runtime
            const showtime = filmData.showtime
            const capacity= filmData.capacity
            const description = filmData.description
            const tickets_sold = filmData.tickets_sold
            const filmElement = defaultMovie(poster, title, runtime, showtime, tickets_sold, capacity, description)
            document.getElementById('all_movies').appendChild(filmElement)
            })
        })
    }
    getAllElements()
   
})
