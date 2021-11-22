const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../Models/Notes');
const fetchuser = require("../middleware/fetchuser");


// ROUTE 1 : Add Notes : POST "/api/notes/addnotes" Login required

router.post('/addnotes', fetchuser, [
   // Validation
   body('title', 'Enter a valid title').isLength({ min: 3 }),
   body('description', 'Desciption must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {

   const { title, description, tag } = req.body;

   // If there are errors, return Bad request and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   try {

      const notes = new Notes({
         title, description, tag, user: req.user.id
      })
      const savedNotes = await notes.save();
      res.json(savedNotes);

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
   }
});



// ROUTE 2 : Get all notes : GET "/api/notes/getnotes" Login required

router.get('/getnotes', fetchuser, async (req, res) => {

   try {

      const notes = await Notes.find({ user: req.user.id });
      res.json(notes);

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
   }

});



// ROUTE 3 : Update Notes : POST "/api/notes/updatenotes" Login required

router.put('/updatenotes/:id', fetchuser, async (req, res) => {

   const { title, description, tag } = req.body;

   try {
      // Creating a newNotes object
      const newNotes = {};
      if (title) { newNotes.title = title };
      if (description) { newNotes.description = description };
      if (tag) { newNotes.tag = tag };

      // Find the note to be updated and update it.
      let notes = await Notes.findById(req.params.id);

      if (!notes) { return res.status(404).send("Not Found!") }

      if (notes.user.toString() !== req.user.id) {
         return res.status(401).send("Not Allowed!");
      }

      notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNotes }, { new: true });
      res.json(notes);

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
   }

})



// ROUTE 4 : Delete Notes : POST "/api/notes/deletenotes" Login required

router.put('/deletenotes/:id', fetchuser, async (req, res) => {

   const { title, description, tag } = req.body;

   try {
      // Creating a newNotes object
      const newNotes = {};
      if (title) { newNotes.title = title };
      if (description) { newNotes.description = description };
      if (tag) { newNotes.tag = tag };

      // Find the note to be updated and update it.
      let notes = await Notes.findById(req.params.id);

      if (!notes) { return res.status(404).send("Not Found!") }

      if (notes.user.toString() !== req.user.id) {
         return res.status(401).send("Not Allowed!");
      }

      notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNotes }, { new: true });
      res.json(notes);

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
   }

})


module.exports = router;