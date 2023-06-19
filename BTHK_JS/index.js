/** @format */

// window.addEventListener('load', function() {
//   var loader = document.getElementById('loader');
//   var text = document.getElementById('textloader');
//   var whiteout = document.getElementById('whiteout');
//   document.body.classList.add('done');
//   text.innerHTML = 'Loading...';

//   loader.style.display = 'block';
//   text.style.display = 'block';

//   setTimeout(function() {
//     loader.style.display = 'none';
//     text.style.display = 'none';
//     whiteout.style.display = 'none';
//   }, 2000);
// });

window.addEventListener("load", function () {
  let loader = document.getElementById("loader");
  let text = document.getElementById("textloader");
  let whiteout = document.getElementById("whiteout");

  document.body.classList.add("done");
  text.innerHTML = "Loading...";

  loader.style.display = "block";
  text.style.display = "block";
  whiteout.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";
    text.style.display = "none";
    whiteout.style.display = "none";
  }, 500);
});

// /cai tren la dung de loadding trang nha mn
// window.onload = function() {
//   var text = document.getElementById('textloader').innerHTML ='Loading...';
//   setTimeout(function() {
//     text.classList.add('paused');
//     text.style.display = 'none';
//   },2000);
// };

function send() {
  let email = document.getElementById("email").value; // Lấy giá trị email từ input có id là "email"
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email
  
  if (email === "") { // Kiểm tra xem người dùng đã nhập email hay chưa
    alert("Please enter your email!");
  } else if (!emailRegex.test(email)) { // Kiểm tra xem định dạng email có đúng hay không
    alert("Please enter a valid email!");
  } else {
    alert('Thank you for your email, we will respond to your email soon!')
  }
}
