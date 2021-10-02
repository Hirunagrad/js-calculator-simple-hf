(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  
  //retrieve data from numbers that are clicked
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });
  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
  })
  back.addEventListener('click', function(e){
    console.log(screen.value)
    if(screen.value)
    {
      let o = screen.value;
      let d = (eval(o)/10);
      o=Math.floor(d);
      screen.value = o;
    }
  })
 
})(); 
