/**
 * Webhook Route is the router for the Webhook resource.
 * All endpoints route to actions on the WebhookController
 * @module routes/webhook
 * @version 0.0.1
 */

module.exports = {

  GET : [{
    path : '/webhooks',
    action : 'Get'
  },
  {
    path : '/webhooks/:id',
    action : 'FindOne'
  }],

  POST : [{
    path : '/webhooks',
    action : 'Post'
  }],

  PUT : [{
    path : '/webhooks/:id',
    action : 'Put'
  }],

  DELETE : [{
    path : '/webhooks/:id',
    action : 'Delete'
  }]

};
