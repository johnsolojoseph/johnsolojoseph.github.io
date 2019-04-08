M.AutoInit();

M.Modal.init(elems, options);

function changeToGif(img, fileName) {
  img.src = 'images/' + fileName + '.gif';
}

function changeToPNG(img, fileName) {
  img.src = 'images/' + fileName + '.png';
}

function closeModal(modal) {
  $(modal).modal('close');
}
