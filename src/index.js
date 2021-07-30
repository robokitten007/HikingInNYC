import data_bind from './scripts/data_bind'
import data_parse from './scripts/data_parse'
import drop_down from './scripts/drop_down'
import * as d3 from 'd3';

//modal intro page
    document.addEventListener('DOMContentLoaded',()=>{
    let modal = document.getElementById('modal');
    let modalcontainer = document.getElementById('modal-container')
         modal.style.display='block'
    let btn = document.getElementById('modal-btn')
    btn.addEventListener('click', e=>{
        modalcontainer.style.display='none'
        modal.style.display='none'
   
    })
})


const dataSources ={
    'NYC Hiking': '../data/NYC_Hiking.json'
}
const source = dataSources[Object.keys(dataSources)[0]]
let result

d3.json(source).then(data=>{

    result = data_parse(data)
    drop_down(result)
    loadKey("Borough", 'TotalNumber');
})

export const loadKey = (key='Borough', subkey='TotalNumber') =>{
    data_bind(result[key], subkey);
   
}

