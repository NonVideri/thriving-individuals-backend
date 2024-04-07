/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74aiu4droop30sp")

  collection.updateRule = "@request.data.email:isset = false && @request.data.confirmed != false"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("74aiu4droop30sp")

  collection.updateRule = ""

  return dao.saveCollection(collection)
})
