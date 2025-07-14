const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING async / await 

async function generateJoke() {
    const config = { 
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke


}

// USING .then

// generateJoke()

// function generateJoke() {
//     const config = { 
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
//         .catch(error => {
//             console.error('Error fetching joke:', error)
//             jokeEl.innerHTML = 'Oops! Could not fetch a joke right now.'
//         })
// }