
import { parseISO, format } from 'date-fns'
import moment from 'moment'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import styles from "./AreaChartFn.module.css";

function AreaChartFn({ data }) {


   return <ResponsiveContainer width="100%" height={300}>
      <AreaChart
         data={data}
         stroke="#2451B7"
      >
         <defs>
            <linearGradient id="color" x1='0' y1="0" x2="0" y2="1">
               <stop offset="0%" stopColor="#2451B7" stopOpacity={5} />
               <stop offset="75%" stopColor="#2451B7" stopOpacity={0.09} />

            </linearGradient>
         </defs>
         <Area dataKey="value" fill="url(#color)" />
         <CartesianGrid opacity={0.2} vertical={false} />
         <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            minTickGap={100}
            fontSize={12}
            fontWeight={600}
            tickFormatter={str => {
               const date = parseISO(str);
               return format(date, 'MMM yyyy');
            }} />
         <YAxis fontSize={12}
            fontWeight={600} axisLine={false} tickLine={false} tickCount={8} />
         <Tooltip content={<CustomTooltip />} />
      </AreaChart>
   </ResponsiveContainer>

}

function CustomTooltip({ active, payload, label }) {
   if (active) {
      return (
         <div className={styles['custom-tooltip']} >\
         <span style ={{padding: '5px'}}>
         <span className="color-white" style ={{padding: '5px'}}>{format(parseISO(label), 'eee, d MMM, yyy HH:mm:ss')}</span>
         <br/>
         <span className="color-white" style ={{padding: '5px'}}>Last: {payload[0].value}</span>
         </span>
         </div>
      )
   }

   return null;
}

export default AreaChartFn;
