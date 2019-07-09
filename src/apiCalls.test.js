import React from 'react';

import { getMovieData, getPeopleData, getPlanetData, getVehicleData } from './apiCalls';


describe ('apiCalls', () => {
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

    it('should return an error response', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.rejects()
      });

      await expect(getMovieData()).rejects.toEqual(Error('Error fetching movies'));
    });

  })
})