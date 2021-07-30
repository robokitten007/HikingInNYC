

/*

{
    "Boroughs": [
        {
            x_borough: "Bronx",
            no_trails: 
            sum_traillength:
            average_traillength:
            max_traillength
            min_traillength:
            max_difficultylevel:
            min_difficultylevel:
            
        },
        {
            x_borough: "Brooklyn",
            sum-trails: "30",
            sum-mileage: "40",
        
            average: "30"
            

        }

    ],

}


*/
export default data =>{
    let borough ={
        Bronx: [],
        Brooklyn: [],
        Manhattan: [],
        Queens:[],
        StatenIsland:[]
    }

    let parkName = {}
    let accessibility = {
        Yes: [],
        No: []
    }
    let result={
        Borough: [],
        Park: [],
        WheelChairAccess: []

    }
    //borough:
    data.forEach(record => {

        switch (record.Prop_ID[0]){
            case "X":
                borough.Bronx.push(record);
            break;
                case "B":
                borough.Brooklyn.push(record);
            break;
            case "M":
                borough.Manhattan.push(record);
            break;
            case "Q":
                borough.Queens.push(record)
            break;
            case "R":
                borough.StatenIsland.push(record)
            break;
            default:
                break;           
        }
    });

  //parkname
    data.forEach(record => {
        let park = record.Park_Name

        if(!parkName[park]){
           
            parkName[park] = [record]
            
        }
        else {
            parkName[park].push(record)
        }
    })

    //access
    data.forEach(record =>{
        let access = record.Accessible
        if (access === 'Y'){
            accessibility.Yes.push(record)
        }
        else {
            accessibility.No.push(record)
        }
    })
  
    Object.keys(borough).forEach(key=>{
        let object={
            x_borough: key,
            TotalNumber: borough[key].length,
            SumLength: totalLength(borough)[key],
            AvgLength: avergeLength(borough)[key],
            MaxLength: maxLength(borough)[key],
            MinLength: minLength(borough)[key],
            Max_difficultylevel: maxLevel(borough)[key],
            Min_difficultylevel: minLevel(borough)[key]
        }
        
        result.Borough.push(object)
    })
      Object.keys(parkName).forEach(key=>{
        let object={
            x_parkName: key,
            TotalNumber: parkName[key].length,
            SumLength: totalLength(parkName)[key],
            AvgLength: avergeLength(parkName)[key],
            MaxLength: maxLength(parkName)[key],
            MinLength: minLength(parkName)[key],
            max_difficultylevel: maxLevel(parkName)[key],
            min_difficultylevel: minLevel(parkName)[key]
        }
      
        result.Park.push(object)
    })

    Object.keys(accessibility).forEach(key=>{
        let object={
            accessibility: key,
            TotalNumber: accessibility[key].length,
            SumLength: totalLength(accessibility)[key],
            AvgLength: avergeLength(accessibility)[key],
            MaxLength: maxLength(accessibility)[key],
            MinLength: minLength(accessibility)[key],
            max_difficultylevel: maxLevel(accessibility)[key],
            min_difficultylevel: minLevel(accessibility)[key]
        }
        result.WheelChairAccess.push(object)
    })
   
    return result    
}
 
// in miles
 function totalLength(stage){
     let sum={}
     Object.keys(stage).forEach(key=>{
         stage[key].forEach(record=>{
             if(typeof record.Length === 'string' && record.Length.includes('mile')){
                
                if(!sum[key]){
                    sum[key]= parseFloat(record.Length)
                }
                else sum[key] += parseFloat(record.Length)
           
             }
             
         })
     }
    )
    return sum
  
 }
//in miles 
  function avergeLength(stage){
     let sum={}
     let avg={}
     Object.keys(stage).forEach(key=>{
         let count=0
         stage[key].forEach(record=>{
             if(typeof record.Length === 'string' && record.Length.includes('mile')){
               
                if(!sum[key]){
                    sum[key]= parseFloat(record.Length)
                    
                }
                else {
                    sum[key] += parseFloat(record.Length)
                }
            count = count+1
             }
             
         })
         avg[key] = sum[key]/count
     }
    )

    return avg
  
 }

 function maxLength(stage){
     let max={}
     Object.keys(stage).forEach(key=>{
         stage[key].forEach(record=>{
             if(typeof record.Length === 'string' && record.Length.includes('mile')){
                if(!max[key]){
                    max[key]= parseFloat(record.Length).toFixed(2)
                }
                else if(max[key] < parseFloat(record.Length)){
                    max[key] = parseFloat(record.Length).toFixed(2)
                }
           
             }
             
         })
     }
    )
     return max
 }
 
  function minLength(stage){
     let min={}
     Object.keys(stage).forEach(key=>{
         stage[key].forEach(record=>{
             if(typeof record.Length === 'string' && record.Length.includes('mile')){
                if(!min[key]){
                    min[key]= parseFloat(record.Length).toFixed(2)
                }
                else if(min[key] > parseFloat(record.Length)){
                    min[key] = parseFloat(record.Length).toFixed(2)
                }
           
             }
             
         })
     }
    )
     return min
 }

 function maxLevel(stage){
     let max_level={}
    Object.keys(stage).forEach(key=>{
        stage[key].forEach(record=>{
           if (typeof record.Difficulty === 'string' && !record.Difficulty.includes('Various')){
            if(!max_level[key]){
                max_level[key]=record.Difficulty
            } 
            else if (record.Difficulty.includes('Difficult')){
                max_level[key]='Difficult'
            }
            else if (record.Difficulty.includes('Moderate') && !max_level[key].includes('Difficult')){
                max_level[key]='Moderate'
            }

           }

        })
    })
     
    return max_level

 }

 function minLevel(stage){
     let min_level={}
    Object.keys(stage).forEach(key=>{
        stage[key].forEach(record=>{
           if (typeof record.Difficulty === 'string' && !record.Difficulty.includes('Various')){
            if(!min_level[key]){
                min_level[key]=record.Difficulty
            } 
            else if (record.Difficulty.includes('Easy')){
                min_level[key]='Easy'
            }
            else if (record.Difficulty.includes('Moderate') && !min_level[key].includes('Easy')){
                min_level[key]='Moderate'
            }

           }

        })
    })
     
    return min_level

 }

 