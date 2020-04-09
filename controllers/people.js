/**
 * PeopleController is a controller for the People resource.
 *
 * Your project is not using mongoose or waterline.
 * The controller is still mandatory but Glad can not
 * default a working API.
 *
 * @module controllers/people
 * @version 0.0.1
 */

class PeopleController extends Glad.Controller {

  Get () {
    this.res.json({
      "_metadata": {
        "collection": "people",
        "offset": 0,
        "limit": 10,
        "total": 35
      },
      "people": [
        {
          "id": 10763,
          "created": "2013-10-31T23:04:30Z",
          "updated": "2014-06-27T13:11:23Z",
          "createdVia": "API",
          "lastActivity": "2014-06-27T13:11:23Z",
          "name": "Tom Minch",
          "firstName": "Tom",
          "lastName": "Minch",
          "stage": "Lead",
          "source": "MyAwesomeWebsite.com",
          "sourceUrl": "",
          "contacted": 0,
          "price": 500000,
          "assignedLenderId": null,
          "assignedLenderName": null,
          "assignedUserId": 8,
          "assignedTo": "Agent White",
          "collaborators": [
            {
               "id": 8,
               "name": "Tom Minch",
               "assigned": true,
               "role": "Broker"
             }
          ],
          "tags": [ "Los Angeles", "90003", "2014 May", "HLConvert" ],
          "emails": [
            {
              "value": "tom.minch@example.com",
              "type": "home",
              "isPrimary": 1,
              "status": "Valid"
            }
          ],
          "phones": [
            {
              "type": "home",
              "value": "925-286-9155",
              "status": "Invalid"
            }
          ],
          "addresses": [
            {
              "type": "work",
              "street": "322 S Broadway",
              "city": "Los Angeles",
              "state": "CA",
              "code": "90003",
              "country": "United States"
            }
          ],
          "picture": {
            "small": "https://example.com/pictures/89615e1a7fe.jpg"
          }
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

module.exports = PeopleController;
