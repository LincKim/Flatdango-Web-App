document.addEventListener('DOMContentLoaded', () => {
        const defaultMovie = (poster, title, runtime, showtime, tickets_sold, capacity) => {
            const movieOne = document.createElement('div')
            movieOne.className = 'topMovie'

            const moviePoster = document.createElement('img')
            moviePoster.src = poster

            const movieTitle = document.createElement('h3')
            movieTitle.innerText = title

            const movieRuntime = document.createElement('p')
            movieRuntime.innerText = `runs for: ${runtime} mins`

            const movieShowtime = document.createElement('p')
            movieShowtime.innerText = `Time: ${showtime} hrs`

            const movietickets_sold = document.createElement('p')
            movietickets_sold.innerText = function actualTickets() {
                if (Math.abs(capacity - tickets_sold) > 0){
                    const buyingTicket = document.createElement('button')

                    buyingTicket.className = 'btn'
                    buyingTicket.textContent = `buy ticket`

                    buyingTicket.addEventListener('click', () => {
                        const payTicket = document.createElement('form')
                        
                        const inputOne = document.createElement('input')
                        inputOne.textContent = `Name: `

                        const inputTwo = document.createElement('input')
                        inputTwo.textContent = `Phone: `

                        const inputThree = document.createElement('input')
                        inputThree.textContent = `Email: `

                        const submitButton = document.createElement('button')
                        submitButton.className = 'btn'
                        submitButton.innerText = `submit`
                        submitButton.addEventListener('click', () => {alert('You will receive a confirmation SMS shortly')})

                        payTicket.appendChild(inputOne)
                        payTicket.appendChild(inputTwo)
                        payTicket.appendChild(inputThree)
                        payTicket.appendChild(submitButton)

                        return payTicket
                        
                    })
                }else if (Math.abs(capacity - tickets_sold) === 0){
                    return buyingTicket.addEventListener('mouseover', () => {alert('We are out of tickets!')})
                }
                movieOne.appendChild(moviePoster)
                movieOne.appendChild(movieTitle)
                movieOne.appendChild(movieRuntime)
                movieOne.appendChild(movieShowtime)
                movieOne.appendChild(movietickets_sold)

                document.getElementById('main').appendChild(movieOne)
            }
        }
})