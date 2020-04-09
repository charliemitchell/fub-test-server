/**
 * EventController is a controller for the Event resource.
 *
 * Your project is not using mongoose or waterline.
 * The controller is still mandatory but Glad can not
 * default a working API.
 *
 * @module controllers/event
 * @version 0.0.1
 */

class EventController extends Glad.Controller {

  Get () {
    this.res.json({
      "_metadata": {
        "collection": "events",
        "offset": 0,
        "limit": 1,
        "total": 1000
      },
      "events": [
        {
          "id": 132,
          "created": "2014-05-05T19:38:27Z",
          "updated": "2014-05-05T19:38:27Z",
          "personId": 10763,
          "message": "I am interested in 6825 Mulholland Dr, ...",
          "description": "Move-in: 12/28/2013",
          "noteId": 32,
          "source": "Zillow",
          "type": "Property Inquiry",
          "property": {
            "street": "6825 Mulholland Dr",
            "city": "Los Angeles",
            "state": "CA",
            "code": "90068",
            "mlsNumber": "14729339",
            "price": "310000",
            "forRent": "0",
            "url": "http://www.zillow.com/homedetails/6825-Mulholland-Dr-Los-Angeles-CA-90068/2109065822_zpid/",
            "type": "Residential",
            "bedrooms": "0",
            "bathrooms": null,
            "area": null,
            "lot": null
          },
          "pageTitle": null,
          "pageUrl": null,
          "pageDuration": 0
        }
      ]
    })
  }

  FindOne () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Post () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Put () {
    this.res.status(500).json({ err: 'not implemented' });
  }

  Delete () {
    this.res.status(500).json({ err: 'not implemented' });
  }

}

module.exports = EventController;
