import data_bind from './scripts/data_bind'
import data_parse from './scripts/data_parse'
import drop_down from './scripts/drop_down'
import * as d3 from 'd3';

const dataSources ={
    'NYC Hiking': '../data/NYC_Hiking.json'
}
const source = dataSources[Object.keys(dataSources)[0]]
let result

d3.json(source).then(data=>{
    //data is rawdata here
    result = data_parse(data)
    console.log(result)
    drop_down(result)
    loadKey("Borough", 'TotalNumber');
})

export const loadKey = (key='Borough', subkey='TotalNumber') =>{
    data_bind(result[key], subkey);
   
    // console.log('loadkey')
}

