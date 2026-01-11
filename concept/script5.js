const API_URL = "https://api.github.com/users/dravidpa7"

// console.log(fetch(API_URL));

// const Promises = fetch(API_URL)

// Promises.then(data => console.log(data));

const handle = async () => {
    try {
        const data = await fetch(API_URL)
        console.log(data) 
        const response = data.json()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
    
    // const responseValue = await response
    // console.log(responseValue)

    // response.then(data => console.log(data))
}

handle()