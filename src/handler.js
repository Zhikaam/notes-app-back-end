const {nanoid} = require('nanoid');
const notes = require(./notes);

const handler = (request, h) => {

    const {title, tags, body} = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote)

    const isSuccess = notes.filter((note) => note.id === id).lenght > 0

    if (isSuccess) {
        const response = h.response({
            status: 'succes',
            message: 'catattan berhasil ditambahkan',
            data: {
                noteId: id,
            };
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    

    
    const getAllNotesHandler = () => ({
        status: 'success',
        data : {notes,
        }
    });

    const getNoteByIdHandler = (request, h) => {

        const {id} = request.params;

        const note = notes.filter((n) => n.id === id)[0];
        if (note !== undefined){
            return {
                status: 'success',
                data:{
                    note,
                },
            },
        }

    };

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });

    response.code(404);
    return response;
};

module.exports = {addNoteHandler, getAllNotesHandler, getNoteByHandler} ;