import axios from 'axios';
import React, {useEffect, useState} from 'react';
import  {Line} from 'react-chartjs-2';

const url_1 = 'https://api.coingecko.com/api/v3/coins/';
const url_2 = '/market_chart?vs_currency=usd&days=30&interval=Minutely';

const MarketChart  = ({coinId}) =>{
   
    const [time,setTime] = useState([]);
    const [prices,setPrices] = useState([]);
    const [market_caps,setMarket_caps] = useState([]);
    const [total_volumes,setTotal_volumes] = useState([]);

    
        useEffect(() => {
            const formatedTimestamp = (x)=> {
                const d = new Date(x - 3000);
                // setDate(d.toISOString().split('T')[0]);
                const daytime = d.toTimeString().split(' ')[0];
                return `${daytime}`;
              }
            var url = url_1 + coinId + url_2;
            axios.get(url)
               .then(response =>{
                 var datrum = response.data;
                 var timeArray = datrum.prices.map(values => values[0]);
                
                 setTime(timeArray.map(clock => formatedTimestamp(clock)));
                 
                 setPrices(datrum.prices.map(values => values[1]));
                 setMarket_caps(datrum.market_caps.map(values => values[1]));
                 setTotal_volumes(datrum.total_volumes.map(values => values[1]));

               });
               
        },[]);
     
   
        return (
            <div>
               <Line
               data = {{
                   labels: time,
                   datasets:[
                       {
                           label:'Price',
                           data: prices,
                           borderColor  : '#05f3f7',
                            pointRadius: 0,
                       },
                       {
                           label : 'Market Capital',
                           data : market_caps,
                           borderColor  : '#f70556',
                           pointRadius: 0,
                       },
                       {
                        label : 'Total Volumes',
                        data : total_volumes,
                        borderColor  : '#a6f705',
                        pointRadius: 0,
                       }
                   ],
               }}
               height = {330}
               width = {566}
               options = {{
                   maintainAspectRatio : false
               }}
               />
            </div>
        )
    
}
export default MarketChart;
