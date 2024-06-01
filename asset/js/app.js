window.setInterval(ut, 1000);
function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('faq-title') || event.target.classList.contains('title') ) {
  
    document.querySelectorAll('span.angle-active').forEach(function(span) {
      span.classList.remove('angle-active');
    });

    document.querySelectorAll('.faq-desc').forEach(function(desc) {
      desc.classList.remove('faq-desc-active');
    });

    event.target.querySelector('span').classList.add('angle-active');

    var nextDesc = event.target.nextElementSibling;
    if (nextDesc && nextDesc.classList.contains('faq-desc')) {
      nextDesc.classList.add('faq-desc-active');
    }
  }
});

var submit_btn = document.querySelector('.input-button');
submit_btn.addEventListener('click', function(){
  var alert_message = document.querySelector('.submit-message');
  alert_message.classList.add('submit-active');
});

window.setInterval(removeAlert, 5000);

function removeAlert(){
  var alert_message = document.querySelector('.submit-message');
  alert_message.classList.remove('submit-active');
}










