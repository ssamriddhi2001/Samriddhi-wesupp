const signupLink = document.querySelector('.signup');
const signupImg = signupLink.querySelector('.signup_img');

const signinLink = document.querySelector('.signin');
const signinImg = signinLink.querySelector('.signin_img');

signupLink.addEventListener('mouseenter', function() {
  signupImg.src = "../assets/icons/signup-white.png";
});

signupLink.addEventListener('mouseleave', function() {
  signupImg.src = "../assets/icons/signup.png";
});

signinLink.addEventListener('mouseenter', function() {
  signinImg.src = "../assets/icons/signup-white.png";
});

signinLink.addEventListener('mouseleave', function() {
  signinImg.src = "../assets/icons/signup.png";
});
