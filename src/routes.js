const {addNoteHandler. getAllNotesHandler} = require('./handler');
const routes = [
    {
        method :'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method :'POST',
        path: '/notes',
        handler: getAllNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler:() => {},

    },
   
];

module.exports = routes;