function Instrument(Id, type, additional) {
  this.Id = Id;
  this.type = type;
  this.additional = additional;
}

function Display() {}
//Methods for Display

//Add submit event listner
let vibesform = document.getElementById("vibesform");
vibesform.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  let Id = document.getElementById("Instrument_ID").value;

  let Guitar = document.getElementById("Guitar");
  let Casio = document.getElementById("Casio");
  let Drum = document.getElementById("Drum");
  let type;

  if (Guitar.checked) {
    type = Guitar.value;
  } else if (Casio.checked) {
    type = Guitar.value;
  } else if (Drum.checked) {
    type = Guitar.value;
  }

  let additional = document.getElementById("additional").value;
  let instrument = new Instrument(Id, type, additional);
}