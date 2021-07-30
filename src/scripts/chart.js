import * as d3 from 'd3'
import {tip as d3tip} from 'd3-v6-tip'

export default (data, YKey) =>{
    console.log('chart')
    d3.selectAll("svg > *").remove();
    const svg = d3.select('svg'),

    margin={top: 20,
            right: 20,
            bottom: 100,
            left: 50},

    width = svg.attr('width') - margin.left - margin.right,
    height = svg.attr('height') - margin.top - margin.bottom,
    x = d3.scaleBand().rangeRound([0, width]).padding(0.2),
    y = d3.scaleLinear().rangeRound([height,0]),
    g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
//    console.log(result)
//        let data=result.Borough
        // console.log(data)
        const keys = data.map(d=>d[Object.keys(d)[0]])
        x.domain(keys)
        y.domain([0, d3.max(data, d=>d[YKey])])
       
        //x-axis
        g.append('g')
            .attr("class", 'axis axis-x')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
                .style('text-anchor', 'end')
                .attr('dx', '-0.8em')
                .attr('transform', d=>'rotate(-45)')
        //y-axis
        g.append('g')
            .attr('class', 'axis axis-y')
            .call(d3.axisLeft(y))

         g.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d[Object.keys(d)[0]]))
            .attr('width', x.bandwidth())
            .attr('height', d=> (height -y(0)))
            .attr('y', d=>y(0))
    
//adding transition

        g.selectAll('rect')
            .transition()
            .duration(800)
            .attr('y', d => y(d[YKey]))
            .attr('height', d=>height - y(d[YKey])); 


//adding y-axis lable

 svg.append('text')
        .attr('class', 'y-label')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0-5)
        .attr('x', 0-height/2)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text(YKey)
        // .text(d[Object.values(d)].split('_')[0]])


//adding tooltips

const tip = d3tip()
        .attr('class', 'tooltip')
        .offset([-5,0])
        .html((event,d)=>(`<span class='tip-text'>${YKey}:` + '  ' + d[YKey] + '</span>'))
        // .html((event,d)=>('this is a test'))
    svg.call(tip)
    
    g.selectAll('.bar')
        .on('mouseover', tip.show)
        .on ('mouseout', tip.hide)

}