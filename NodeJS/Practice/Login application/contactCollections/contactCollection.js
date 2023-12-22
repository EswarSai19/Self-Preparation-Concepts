
// Get all contacts
const getcontacts = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
  }

// Post contacts
const createContact = (req, res) => {
    console.log("The created body is",req.body)
    res.status(200).json({message : "create contact"});
  }

  // Get one contact
const getContact = (req, res) => {
    res.status(200).json({message : `Get contact of ID ${req.params.id}`});
  }

// put contacts
const updateContact = (req, res) => {
    res.status(200).json({message : `update contact of ID ${req.params.id}`});
  }

  //Delete Contact
  const deleteContact = (req, res) => {
    res.status(200).json({message : `delete contact of ID ${req.params.id}`});
  }
module.exports = {getcontacts,createContact,getContact,updateContact,deleteContact}