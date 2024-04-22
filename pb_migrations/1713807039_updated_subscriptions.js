/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spkb5jviwjre8n7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sgeevv9t",
    "name": "confirmed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spkb5jviwjre8n7")

  // remove
  collection.schema.removeField("sgeevv9t")

  return dao.saveCollection(collection)
})
