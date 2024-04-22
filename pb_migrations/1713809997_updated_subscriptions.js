/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spkb5jviwjre8n7")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spkb5jviwjre8n7")

  collection.createRule = "@request.data.confirmed = false"
  collection.updateRule = "@request.data.email:isset = false && @request.data.name:isset = false && @request.data.confirmed = true"

  return dao.saveCollection(collection)
})
