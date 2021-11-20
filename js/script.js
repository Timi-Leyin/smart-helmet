// PARALAX
function parallax(parent) {
  let element;
  return function({speed,elem, offset}) {
    speed=2
    offset=3
  document.querySelector(parent).addEventListener('mousemove',(event=>{

    element=document.querySelectorAll(elem);
    element.forEach((el,i)=>{
    const _y= (window.innerHeight - event.pageY*(speed+i)-offset) /100
    const _x=(window.innerWidth - event.pageX*(speed+i)-offset) /100
    el.style.transform=`translateX(${_x}px) translateY(${_y}px)`
   })
  }))
  }
  
}


function cursor(){
    const _el=document.querySelector('._cursor');
    const moveCursor=(ev)=>{
        _el.style.top=ev.pageY +'px'
        _el.style.left=ev.pageX + 'px'
    }
    window.addEventListener('mousemove',moveCursor);
    // document.querySelectorAll('.pointer').forEach(pointer=>{
    //     pointer.addEventListener('mouseover',()=> {
    //         _el.classList.add('pointed')
    //         pointer.addEventListener('mouseout',()=> _el.classList.remove('pointed'))
    //     })
    // })
}

function splitText(_el){
let element= typeof el !== 'node'? document.querySelectorAll(_el) : _el;
element.forEach(el=>{
 const elCont = el.innerText.split('');
el.innerText=''
elCont.forEach(cont=>{
    const _contNode=document.createElement('span');
   if(cont == ' '){
     _contNode.innerText=cont;
     _contNode.classList.add('white-space')
     el.appendChild(_contNode)

   }
   _contNode.innerText=cont;
   el.appendChild(_contNode)
})
})
}




function load({el,time=50},callback){
  let element= typeof el !== 'node'? document.querySelector(el) : el;
const counterEl=element.querySelector('.load-counter');
let count=0;
const countInterval = setInterval(startCount,time)

function startCount(){
  count ++ ;
  if(count >= 100 ){
    // loading end;
    clearInterval(countInterval);
    callback(element)
  }
  
let counter=count+'%';
 counterEl.dataset.loadCount=counter
 counterEl.innerText=counter


}


}