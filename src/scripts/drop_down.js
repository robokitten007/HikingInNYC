import { loadKey } from "../index";

export default result =>{
    let key;
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
                key=e.target.innerHTML
                console.log(key)
                loadKey(key)
            }
        })
    const yUl = document.getElementById('y-ul')
    // console.log(result[key][0])
    // console.log(Object.keys(result[key][0]).slice(1))
    Object.keys(result[key][0]).slice(1).forEach(YKey=>{
        
        const yLi = document.createElement('li')
        yLi.classList.add('y-content')
        yLi.innerHTML = YKey
        yUl.appendChild(yLi)
        yLi.addEventListener('click', e=>{
            if(!e.target.classList.contains('active')){
                Array.from(yUl.getElementsByClassName('active')).forEach(li=>{
                    li.classList.remove('active');
                })
                e.target.classList.add('active')
                // key=e.target.innerHTML
                // console.log(key)
                // loadKey(key)
            }
        })
    })
    })


}