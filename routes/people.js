/**
 * People Route is the router for the People resource.
 * All endpoints route to actions on the PeopleController
 * @module routes/people
 * @version 0.0.1
 */

module.exports = {

  GET : [{
    path : '/people',
    action : 'Get'
  },
  {
    path : '/people/:id',
    action : 'FindOne'
  }],

  POST : [{
    path : '/people',
    action : 'Post'
  }],

  PUT : [{
    path : '/people/:id',
    action : 'Put'
  }],

  DELETE : [{
    path : '/people/:id',
    action : 'Delete'
  }]

};
