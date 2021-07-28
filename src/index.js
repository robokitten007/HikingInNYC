import data_bind from './scripts/data_bind'
//import data_parse from './data_parse'
const dataSources ={
    'NYC Hiking': '../data/NYC_Hiking.json'
}
const source = dataSources[Object.keys(dataSources)[0]]
//let result = data_parse(data)
//data_bind(result.Borough)

// comment this out
data_bind(source);

