let navBar = document.querySelectorAll(".baba");
// console.log(navBar);
// alert('ok')
// navBar.forEach(function(a) {
//     a.addEventListener("click", function() {
//         // navBar.forEach(function(a){
//         //     a.classList.remove("active");
//         // })
//         a.classList.add("active");
//         console.log('a',a);
        
//     })
// })

// navBar.addEventListener("click", function(){
//   this.classList.add("active");
// })

const links = document.querySelectorAll('.baba');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}

const sante  = document.querySelectorAll('.yerry');
    
if (sante.length) {
  sante.forEach((link) => {
    link.addEventListener('click', (e) => {
      sante.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}
   
  