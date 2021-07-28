import data_bind from './scripts/data_bind'

//datasources in case of multiple source file
const dataSources ={
    'NYC Hiking': '../data/NYC_Hiking.json'
}
//set default source and bind data source
const source = dataSources[Object.keys(dataSources)[0]]
data_bind(source);
