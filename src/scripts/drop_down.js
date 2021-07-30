import { loadKey } from "../index";

export default result =>{
    let XKey
    let YKey
    const xUl = document.getElementById('x-ul')
    Object.keys(result).forEach(key=>{
        const xLi = document.createElement('li')
        xLi.classList.add('x-content')
        xLi.innerHTML = key
        xUl.appendChild(xLi)
        xLi.addEventListener('click', e=>{
                if(!e.target.classList.contains('active')){
                    Array.from(xUl.getElementsByClassName('active')).forEach(li=>{
                        li.classList.remove('active');
                    })
                    e.target.classList.add('active')
                    XKey=e.target.innerHTML
                    loadKey(XKey, YKey)
                }
            })
    })
   const yUl = document.getElementById('y-ul')
   Object.keys(result['Borough'][0]).slice(1,6).forEach(key=>{
        const yLi = document.createElement('li')
        yLi.classList.add('y-content')
        yLi.innerHTML= key
        yUl.appendChild(yLi)
        yLi.addEventListener('click', e=>{
            if(!e.target.classList.contains('active')){
                Array.from(yUl.getElementsByClassName('active')).forEach(li=>{
                    li.classList.remove('active');
                })
                e.target.classList.add('active')
                YKey=e.target.innerHTML
                loadKey(XKey, YKey)
    
            }
        })
    })
      


}