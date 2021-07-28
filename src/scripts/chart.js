import * as d3 from 'd3'

export default result =>{
    const svg = d3.select('svg'),
    margin={top: 20,
            right: 20,
            bottom: 30,
            left: 50},
    width = svg.attr('width') - margin.left - margin.right,
    height = svg.attr('height') - margin.top - margin.bottom,
    x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height,0]),
    g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
    console.log(result)
        let data=result.Borough
        x.domain(data.map(d=>d.x_borough))
        y.domain([0, d3.max(data, d=>d.no_trails)])
        //x-axis
        g.append('g')
            .attr("class", 'axis axis-x')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x))
    
     
}