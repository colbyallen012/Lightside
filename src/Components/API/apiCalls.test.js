import React from 'react';

import { getMovieData, getPeopleData, getPlanetData, getVehicleData } from './apiCalls';


describe ('apiCalls', () => {
  describe('getPeopleData', () => {
    let mockPeople;

    beforeEach(() => {
      mockPeople = [
        {name: "Luke Skywalker", birth_year: "19BBY", gender: "male", height: "172", eye_color: "blue"},
        {name: "C-3PO", birth_year: "112BBY", gender: "n/a", height: "167", eye_color: "yellow"}
      ];

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPeople)
        });
      });
    });

    it('should be called with the correct URL', async () => {
      const expected = 'https://swapi.co/api/people/';
      getPeopleData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getPeopleData();
      expect(result).toEqual(mockPeople)
    });

    it.skip('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.rejects()
      });

      await expect(getPeopleData()).rejects.toEqual(Error('Error fetching people'));
    });
  });

  describe('getPlanetData', () => {
    let mockPlanets;

    beforeEach(() => {
      mockPlanets = [
        {name: "Alderaan", terrain: "grasslands, mountains", diameter: "12500", population: "2000000000"},
        {name: "Yavin IV", terrain: "jungle, rainforests", diameter: "10200", population: "1000",}
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPlanets)
        });
      });
    });

    it('should be called with the correct URL', async () => {
      const expected = 'https://swapi.co/api/planets/';
      getPlanetData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getPlanetData();
      expect(result).toEqual(mockPlanets)
    });

    it.skip('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.rejects()
      });

      await expect(getPlanetData()).rejects.toEqual(Error('Error fetching planets'));
    });
  })

  describe('getVehicleData', () => {
    let mockVehicles;

    beforeEach(() => {
      mockVehicles = [
        {name: "Sand Crawler", model: "Digger Crawler", vehicle_class: "wheeled", passengers: "30"},
        {name: "T-16 skyhopper", model: "T-16 skyhopper", vehicle_class: "repulsorcraft", passengers: "1"}
      ];
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockVehicles)
        });
      });
    });

    it('should be called with the correct URL', async () => {
      const expected = 'https://swapi.co/api/vehicles/';
      getVehicleData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

    it('should return a parsed response', async () => {
      const result = await getVehicleData();
      expect(result).toEqual(mockVehicles)
    });

    it.skip('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.rejects()
      });

      await expect(getVehicleData()).rejects.toEqual(Error('Error fetching vehicles'));
    });
    
  describe('getMovieData', () => {
    let mockMovies;
      
    beforeEach(() => {
      mockMovies = [
        {title: "A New Hope", episode_id: 4,opening_crawl: "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....", release_date: "1977-05-25"}
        ];
  
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockMovies)
      })
    })
  })
  
    it('should be called with the correct URL', async () => {
      const expected = 'https://swapi.co/api/films/';
      getMovieData();
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  
    it('should return a parsed response', async () => {
      const result = await getMovieData();
      expect(result).toEqual(mockMovies)
    });

    it.skip('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.rejects()
      });

      await expect(getMovieData()).rejects.toEqual(Error('Error fetching movies'));
      });
    })
  })
})