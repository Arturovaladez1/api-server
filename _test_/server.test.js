'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);
const { sequelize } = require('../models/model');

// start database for testing
beforeAll(
  async () => {
    // connect and create table
    await sequelize.sync();
  }
)

afterAll(
  async () => {
    // remove all things in table
    await sequelize.drop();
  }
)



describe('Testing the express server', () => {

  test('404 on a bad route', async () => {
    const response = await request.get('/fdgdfg');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('404 on a bad method at movies', async () => {
    const response = await request.patch('/movies');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('404 on a bad method at boxoffice', async () => {
    const response = await request.patch('/boxoffice');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });

  test('Create a movie using POST', async () => {
    const response = await request.post('/movies').send({
      title: "s",
      year: 546,
      runtime: 654,
    });
    expect(response.status).toEqual(200);
  });

  test('Create a boxoffice using POST', async () => {
    const response = await request.post('/boxoffice').send({
      boxoffice: 324234,
      ticket: 546,
      movieId: 1,
    });
    expect(response.status).toEqual(200);
  });

  test('Read a list of movies using GET', async () => {
    const response = await request.get('/movies');
    expect(response.status).toEqual(200);
    // expect(Array.isArray(response.body)).toBeTruthy());
  });

  test('Read a list of boxoffice using GET', async () => {
    const response = await request.get('/boxoffice');
    expect(response.status).toEqual(200);
    // expect(Array.isArray(response.body)).toBeTruthy());
  });

  test('Read a movie using GET', async () => {
    const response = await request.get('/movies/1');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  test('Read a boxoffice using GET', async () => {
    const response = await request.get('/boxoffice/1');
    expect(response.status).toEqual(200);
    // expect(Array.isArray(response.body)).toBeTruthy());
  });

  test('Update a movie using PUT', async () => {
    const response = await request.put('/movies/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ "id": "1" });
  });

  test('Update a boxoffice using PUT', async () => {
    const response = await request.put('/boxoffice/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ "id": "1" });
  });

  test('Destroy a movie using DELETE', async () => {
    const response = await request.delete('/movies/3');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });

  test('Destroy a boxoffice using DELETE', async () => {
    const response = await request.delete('/boxoffice/1');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({});
  });

});


// describe('Testing the express server', () => {

//   test('404 on a bad route', async () => {
//     const response = await request.get('/fdgdfg');
//     expect(response.status).toEqual(404);
//     // expect(response.body).toEqual({});
//   });

//   test('404 on a bad method', async () => {
//     const response = await request.patch('/movies');
//     expect(response.status).toEqual(404);
//     // expect(response.body).toEqual({});
//   });

//   test('Create a record using POST', async () => {
//     const response = await request.post('/movies').send({
//       title: "s",
//       year: 546,
//       runtime: 654,
//     });
//     expect(response.status).toEqual(200);
//   });

//   test('Read a list of records using GET', async () => {
//     const response = await request.get('/movies');
//     expect(response.status).toEqual(200);
//     // expect(Array.isArray(response.body)).toBeTruthy());
//   });

//   test('Read a record using GET', async () => {
//     const response = await request.get('/movies/1');
//     expect(response.status).toEqual(200);
//     expect(response.body.id).toEqual(1);
//   });

//   test('Update a record using PUT', async () => {
//     const response = await request.put('/movies/1');
//     expect(response.status).toEqual(200);
//     expect(response.body).toEqual({ "id": "1" });
//   });

//   test('Destroy a record using DELETE', async () => {
//     const response = await request.delete('/movies/3');
//     expect(response.status).toEqual(200);
//     expect(response.body).toEqual({});
//   });

// });