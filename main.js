var modal = $("#myModal")[0];

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$("#myBtn").click(function() {
    modal.style.display = "block";
})

$(".close").click(function() {
    modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}