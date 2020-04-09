/**
 * Event Route is the router for the Event resource.
 * All endpoints route to actions on the EventController
 * @module routes/event
 * @version 0.0.1
 */

module.exports = {

  GET : [{
    path : '/events',
    action : 'Get'
  },
  {
    path : '/events/:id',
    action : 'FindOne'
  }],

  POST : [{
    path : '/events',
    action : 'Post'
  }],

  PUT : [{
    path : '/events/:id',
    action : 'Put'
  }],

  DELETE : [{
    path : '/events/:id',
    action : 'Delete'
  }]

};
