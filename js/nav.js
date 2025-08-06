// window.addEventListener('scroll', function(scr){
//   const nav = document.querySelector('header');
//   const footer = document.querySelector('.black');

//   const scrollY = window.scrollY || window.pageYOffset;
//   const navH = nav.offsetHeight;
//   const navPadding = 10;
  
//   const foot = footer.getBoundingClientRect();
//   const footheight = scrollY + foot.top;  

//   if (scrollY + navPadding + navH > footheight) {
//     nav.style.position = 'absolute';
//     nav.style.top = (footheight - navH - 3) + 'px';
//   } else {
//     nav.style.position = 'fixed';
//     nav.style.top = '0';
//   }  
// })

function updateNavPosition() {
  const nav = document.querySelector('header');
  const footer = document.querySelector('.black');

  const scrollY = window.scrollY || window.pageYOffset;
  const navH = nav.offsetHeight;
  const navPadding = 10;

  const footheight = footer.offsetTop;

  if (scrollY + navPadding + navH > footheight) {
    nav.style.position = 'absolute';
    nav.style.top = (footheight - navH - 3) + 'px';
  } else {
    nav.style.position = 'fixed';
    nav.style.top = '0';
  }
}

// 스크롤되면 내브 위치 재설정
window.addEventListener('scroll', updateNavPosition);

// 화면 사이즈 변경되면 내브 위치 재설정
window.addEventListener('resize', updateNavPosition);