/**
 * WebhookController is a controller for the Webhook resource.
 *
 * Your project is not using mongoose or waterline.
 * The controller is still mandatory but Glad can not
 * default a working API.
 *
 * @module controllers/webhook
 * @version 0.0.1
 */

class WebhookController extends Glad.Controller {

  Get () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  FindOne () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Post () {
    const { auth, body, body: {event, url} } = this.req;
    console.log(auth);
    console.log(body);

    this.res.status(201).json(
      {
        id: 1004,
        status: "Active",
        event,
        url
      }
    );
  }

  Put () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Delete () {
    this.res.status(500).json({ err: 'not implemented' });
  }

}

module.exports = WebhookController;
