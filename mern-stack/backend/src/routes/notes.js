const { Router } = require ('express');
const router = Router();

const {getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notes.controlers');

router.route('/')
    .get(getNotes)
    .post(createNote)


router.route('/:id')
    .put(updateNote)
    .delete(deleteNote)
    .get(getNote)
module.exports = router;