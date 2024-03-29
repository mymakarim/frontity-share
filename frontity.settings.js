const settings = {
  "name": "frontity-contact-form-7",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Frontity Share Package",
      "description": "Introducing Share package for Frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://fashionjackson.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-share"
  ]
};

export default settings;
