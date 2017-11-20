var input = document.querySelectorAll("label.check input");
if(input !== null) {
  [].forEach.call(input, function(el) {
    if(el.checked) {
      el.parentNode.classList.add('c_on');
    }
    el.addEventListener("click", function(event) {
      event.preventDefault();
      el.parentNode.classList.toggle('c_on');
    }, false);
  });
}

console.log(data);

var studentFinder = document.getElementById('studentFinder');
studentFinder.addEventListener('click', function() {
	alert('touch me')
})