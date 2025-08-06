let btn = document.querySelectorAll('.btn_txt');
let arr = document.querySelectorAll('.paarrow');

btn.forEach(function(bt){
    bt.addEventListener('mouseenter', function(){
        btn.forEach(function(i){
            let btnT = i.querySelectorAll('.btn_txt');
            if(i === bt){
                i.classList.add('pahover')
                
            }else{
                i.classList.remove('pahover')       
            }
        })
    })
})


arr.forEach(function(paarrow) {
  const img = paarrow.querySelector('img');
  if (!img) return;

  paarrow.addEventListener('mouseenter', function() {
    img.src = './img/icon/Group_202.png'; // 바꿀 이미지 경로
  });

  paarrow.addEventListener('mouseleave', function() {
    img.src = './img/icon/Group_203.png'; // 원래 이미지 복원
  });
});
