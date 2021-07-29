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
    console.log(result)
    drop_down(result)
    loadKey("WheelChairAccess", 'sum_traillength');
})

export const loadKey = (key, subkey='no_trails') =>{
    data_bind(result[key], subkey);
}
// Make an <li> list between:
// borough
// accessibility
// With on lick get let newKey = li.innerHTML, then call loadKey(newKey);

