function Instrument(Id, type, additional) {
  this.Id = Id;
  this.type = type;
  this.additional = additional;
}

function Display() {}
//Methods for Display
Display.prototype.add = function (instrument) {
  tableBody = document.getElementById("tableBody");
  let uistring = `<tr>
                    <td>${instrument.Id}</td>
                    <td>${instrument.type}</td>
                    <td>${instrument.additional}</td>
                  </tr>`;
  tableBody.innerHTML += uistring;
};

Display.prototype.clear = function () {
  let vibesform = document.getElementById("vibesform");
  vibesform.reset();
};

Display.prototype.validate = function (instrument) {
  if (instrument.Id.length == 0) {
    return false;
  } else return true;
};

Display.prototype.show = function (msg) {
  let message = document.getElementById("msg");
  message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                          ${msg}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 3000);
};

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

  let display = new Display();
  if (display.validate(instrument)) {
    display.add(instrument);
    display.clear();
    display.show("Added instrument");
  } else {
    display.show("ID cannot be empty!");
  }
}
