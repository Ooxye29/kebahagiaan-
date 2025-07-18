const puzzle = document.getElementById("puzzle");
const size = 3;
let pieces = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function checkComplete() {
  for (let i = 0; i < pieces.length; i++) {
    if (parseInt(pieces[i].dataset.index) !== i) return false;
  }
  return true;
}

function createPuzzle() {
  const indices = shuffle([...Array(9).keys()]);

  puzzle.innerHTML = "";
  pieces = [];

  indices.forEach((index, i) => {
    const piece = document.createElement("div");
    piece.classList.add("piece");
    piece.style.backgroundImage = "url('assets/puzzle-img.jpg')";
    piece.style.backgroundPosition = `-${(index % size) * 100}px -${Math.floor(index / size) * 100}px`;
    piece.dataset.index = index;
    piece.draggable = true;

    piece.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", i);
    });

    piece.addEventListener("dragover", (e) => e.preventDefault());

    piece.addEventListener("drop", (e) => {
      e.preventDefault();
      const fromIndex = e.dataTransfer.getData("text/plain");
      const toIndex = i;
      puzzle.insertBefore(pieces[fromIndex], pieces[toIndex]);
      puzzle.insertBefore(pieces[toIndex], pieces[fromIndex]);
      pieces = Array.from(puzzle.children);

      if (checkComplete()) {
        setTimeout(() => {
          alert("Puzzle selesai!");
          window.location.href = "surprise.html";
        }, 300);
      }
    });

    puzzle.appendChild(piece);
    pieces.push(piece);
  });
}

createPuzzle();
