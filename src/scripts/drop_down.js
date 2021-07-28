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
    })
}