import * as d3 from 'd3';
import data_parse from './data_parse'
import chart from './chart'

export default source=>{
   
    d3.json(source).then(data=>{
         let result = data_parse(data)
         chart(result)
    })

}

