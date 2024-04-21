/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "spkb5jviwjre8n7",
    "created": "2024-04-11 06:34:41.563Z",
    "updated": "2024-04-11 06:34:41.563Z",
    "name": "subscriptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lg5oi3dl",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "l7c3gll6",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_ZXpWEOp` ON `subscriptions` (`email`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.data.confirmed = false",
    "updateRule": "@request.data.email:isset = false && @request.data.name:isset = false && @request.data.confirmed = true",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("spkb5jviwjre8n7");

  return dao.deleteCollection(collection);
})
