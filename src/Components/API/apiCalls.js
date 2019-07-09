export const getPeopleData = () => {
    return fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .catch(error => error)
      .catch(error => {
        throw new Error(error.message)
      })
}

export const getPlanetData = () => {
    return fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .catch(error => error)
      .catch(error => {
        throw new Error(error.message)
    })
}

export const getVehicleData = () => {
    return fetch("https://swapi.co/api/vehicles/")
      .then(response => response.json())
      .catch(error => error)
      .catch(error => {
        throw new Error(error.message)
      })
}

export const getMovieData = () => {
    return fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .catch(error => error)
      .catch(error => {
        throw new Error(error.message)
      })
}