export const getPeopleData = () => {
    return fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .catch(error => error)
}

export const getPlanetData = () => {
    return fetch("https://swapi.co/api/planets/")
      .then(response => response.json())
      .catch(error => error)
}

export const getVehicleData = () => {
    return fetch("https://swapi.co/api/vehicles/")
      .then(response => response.json())
      .catch(error => error)
}

export const getMovieData = () => {
    return fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .catch(error => error)
}