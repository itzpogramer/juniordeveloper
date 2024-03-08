  // Wait for the DOM content to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Select the navbar toggle button and the navbar menu
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-collapse');

    // Add a click event listener to the navbar toggle button
    navbarToggle.addEventListener('click', function() {
      // Toggle the 'show' class on the navbar menu
      navbarMenu.classList.toggle('show');
    });
  });

  // Function to animate the text
function animateText() {
  var animatedText = document.getElementById("animated-text");
  animatedText.style.opacity = 0;
  animatedText.style.transform = "translateY(-20px)";
  animatedText.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  setTimeout(function() {
    animatedText.style.opacity = 1;
    animatedText.style.transform = "translateY(0)";
  }, 100); // Adjust the delay as needed
}

// Call the function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", animateText);

// Function to animate the button
// Function to animate the button from bottom to top
function animateButton() {
    var animatedButton = document.getElementById("animated-button");
    animatedButton.style.opacity = 0;
    animatedButton.style.transform = "translateY(100px)"; // Change translateY value to move from a greater distance at the bottom
    animatedButton.style.transition = "opacity 1s ease, transform 1s ease"; // Adjust transition duration for a slower animation
  
    setTimeout(function() {
      animatedButton.style.opacity = 1;
      animatedButton.style.transform = "translateY(0)";
    }, 100); // Adjust the delay as needed
  }
  
  // Call the function when the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", animateButton);
  // Function to animate the image




// Function to animate the image
function animateImage() {
    var animatedImage = document.getElementById("animated-image");
    animatedImage.style.opacity = 0;
    animatedImage.style.transform = "translateY(100px)"; // Move from a greater distance at the bottom
    animatedImage.style.transition = "opacity 1s ease, transform 1s ease"; // Adjust transition duration for a slower animation

    setTimeout(function() {
        animatedImage.style.opacity = 1;
        animatedImage.style.transform = "translateY(0)";
    }, 100); // Adjust the delay as needed
}

// Call the function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", animateImage);

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to animate the services section when it comes into view
// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to animate the services section when it comes into view
function animateServices() {
    var servicesContainer = document.getElementById("services-container");
    
    if (isInViewport(servicesContainer)) {
        servicesContainer.style.opacity = 1;
        servicesContainer.style.transform = "translateY(0)";
    } else {
        servicesContainer.style.opacity = 0;
        servicesContainer.style.transform = "translateY(50px)";
    }
}

// Call the function when the user scrolls
window.addEventListener("scroll", animateServices);
     // Function to check if an element is in the viewport
     function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    document.addEventListener("DOMContentLoaded", function() {
        // Select the services container
        const servicesContainer = document.getElementById('services-container');
    
        // Add animation styles
        servicesContainer.style.opacity = '1';
        servicesContainer.style.transform = 'translateY(0)';
    
        // Remove transition after animation
        setTimeout(function() {
            servicesContainer.style.transition = 'none';
        }, 800); // Adjust the time to match the transform duration
    });
    
 // Function to animate the services section when it comes into view
function animateServices() {
    var servicesContainer = document.getElementById("services-container");
    
    if (isInViewport(servicesContainer)) {
        servicesContainer.style.opacity = 1;
        servicesContainer.style.transform = "translateY(0)";
        window.removeEventListener("scroll", animateServices); // Remove the scroll event listener
    } else {
        servicesContainer.style.opacity = 0;
        servicesContainer.style.transform = "translateY(50px)";
    }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Call the function when the user scrolls
window.addEventListener("scroll", animateServices);

// Function to animate the services section on page load
document.addEventListener("DOMContentLoaded", function() {
    // Select the services container
    const servicesContainer = document.getElementById('services-container');

    // Add animation styles
    servicesContainer.style.opacity = '1';
    servicesContainer.style.transform = 'translateY(50)';

    // Remove transition after animation
    setTimeout(function() {
        servicesContainer.style.transition = 'none';
    }, 1500); // Adjust the time to match the transform duration
});

document.addEventListener("DOMContentLoaded", function() {
    var servicesContainer = document.getElementById("services-container");
    
    function animateServices() {
      var rect = servicesContainer.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        servicesContainer.classList.add("services-entered");
        window.removeEventListener("scroll", animateServices);
      }
    }
    
    window.addEventListener("scroll", animateServices);
  });
  
