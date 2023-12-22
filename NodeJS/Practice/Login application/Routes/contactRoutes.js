const express = require("express")
const router = express.Router()
const {getcontacts,createContact,getContact,updateContact,deleteContact} = require("../contactCollections/contactCollection")
router.route("/").get(getcontacts).post(createContact)
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)
module.exports = router;


