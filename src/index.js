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
    result = data_parse(data)
    drop_down(result)
    loadKey("Borough");
    
})

export const loadKey = key=>{
    data_bind(result[key]);
}
// Make an <li> list between:
// borough
// accessibility
// With on lick get let newKey = li.innerHTML, then call loadKey(newKey);

