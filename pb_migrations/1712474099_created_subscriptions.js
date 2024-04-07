/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "74aiu4droop30sp",
    "created": "2024-04-07 07:14:59.320Z",
    "updated": "2024-04-07 07:14:59.320Z",
    "name": "subscriptions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t0fkrcb4",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "w8xxwfea",
        "name": "confirmed",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_y1JnmHX` ON `subscriptions` (`email`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("74aiu4droop30sp");

  return dao.deleteCollection(collection);
})
