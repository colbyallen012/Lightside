export const getMovieData = async () => {
    try {
        const response = await fetch('https://swapi.co/api/films/');
        const movies = await response.json();

        return movies;
    } catch (error) {
        throw Error('Error fetching movies');
    }
}

export const getPeopleData = async () => {
    try {
        const response = await fetch('https://swapi.co/api/people/');
        const people = await response.json();

        return people;
    } catch (error) {
        throw Error('Error fetching people');
    }
}

export const getPlanetData = async () => {
    try {
        const response = await fetch('https://swapi.co/api/planets/');
        const planets = await response.json();

        return planets;
    } catch (error) {
        throw Error('Error fetching planets');
    }
}

export const getVehicleData = async () => {
    try {
        const response = await fetch('https://swapi.co/api/vehicles/');
        const vehicles = await response.json();

        return vehicles;
    } catch (error) {
        throw Error('Error fetching vehicles');
    }
}