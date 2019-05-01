document.addEventListener('DOMContentLoaded', function() {
  // all of your JS code goes here
  // const about = document.getElementById('about');
  // const shop = document.getElementById('categories');
  // const featured = document.getElementById('merchandise');
  // const update = document.getElementById('subscription');
  const navlist = document.querySelectorAll('.navlist li a');
  navlist.forEach(function(element) {
    element.addEventListener('click', function(event) {
      // Stop the default behavior on the button click
      event.preventDefault();
      console.log(event);
      document.querySelector(event.target.hash).scrollIntoView({
        behavior: 'smooth'
      });
      // Now perform our custom button click actions here...
    });
  })

});


