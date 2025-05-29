import './index.css';
function deleteNote(noteId){
    fetch('/delete-note',{
        method: 'POST',
        body: JSON.stringify( { noteId: nodeId})
    }).then((_res) => {
        window.location.href = "/";
    });
}