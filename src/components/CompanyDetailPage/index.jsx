
import { Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { CompanyPeers, ShareHoldingPattern, CompanyRatios } from "../index";
import styles from "./CompanyDetailPage.module.css";

let antChart;

if (typeof window !== 'undefined') {
   antChart = require('@ant-design/charts');
}





const data = [
   { "date": "Jan 1 2000", "price": 1394.46 },
   { "date": "Feb 1 2000", "price": 1366.42 },
   { "date": "Mar 1 2000", "price": 1498.58 },
   { "date": "Apr 1 2000", "price": 1452.43 },
   { "date": "May 1 2000", "price": 1420.6 },
   { "date": "Jun 1 2000", "price": 1454.6 },
   { "date": "Jul 1 2000", "price": 1430.83 },
   { "date": "Aug 1 2000", "price": 1517.68 },
   { "date": "Sep 1 2000", "price": 1436.51 },
   { "date": "Oct 1 2000", "price": 1429.4 },
   { "date": "Nov 1 2000", "price": 1314.95 },
   { "date": "Dec 1 2000", "price": 1320.28 },
   { "date": "Jan 1 2001", "price": 1366.01 },
   { "date": "Feb 1 2001", "price": 1239.94 },
   { "date": "Mar 1 2001", "price": 1160.33 },
   { "date": "Apr 1 2001", "price": 1249.46 },
   { "date": "May 1 2001", "price": 1255.82 },
   { "date": "Jun 1 2001", "price": 1224.38 },
   { "date": "Jul 1 2001", "price": 1211.23 },
   { "date": "Aug 1 2001", "price": 1133.58 },
   { "date": "Sep 1 2001", "price": 1040.94 },
   { "date": "Oct 1 2001", "price": 1059.78 },
   { "date": "Nov 1 2001", "price": 1139.45 },
   { "date": "Dec 1 2001", "price": 1148.08 },
   { "date": "Jan 1 2002", "price": 1130.2 },
   { "date": "Feb 1 2002", "price": 1106.73 },
   { "date": "Mar 1 2002", "price": 1147.39 },
   { "date": "Apr 1 2002", "price": 1076.92 },
   { "date": "May 1 2002", "price": 1067.14 },
   { "date": "Jun 1 2002", "price": 989.82 },
   { "date": "Jul 1 2002", "price": 911.62 },
   { "date": "Aug 1 2002", "price": 916.07 },
   { "date": "Sep 1 2002", "price": 815.28 },
   { "date": "Oct 1 2002", "price": 885.76 },
   { "date": "Nov 1 2002", "price": 936.31 },
   { "date": "Dec 1 2002", "price": 879.82 },
   { "date": "Jan 1 2003", "price": 855.7 },
   { "date": "Feb 1 2003", "price": 841.15 },
   { "date": "Mar 1 2003", "price": 848.18 },
   { "date": "Apr 1 2003", "price": 916.92 },
   { "date": "May 1 2003", "price": 963.59 },
   { "date": "Jun 1 2003", "price": 974.5 },
   { "date": "Jul 1 2003", "price": 990.31 },
   { "date": "Aug 1 2003", "price": 1008.01 },
   { "date": "Sep 1 2003", "price": 995.97 },
   { "date": "Oct 1 2003", "price": 1050.71 },
   { "date": "Nov 1 2003", "price": 1058.2 },
   { "date": "Dec 1 2003", "price": 1111.92 },
   { "date": "Jan 1 2004", "price": 1131.13 },
   { "date": "Feb 1 2004", "price": 1144.94 },
   { "date": "Mar 1 2004", "price": 1126.21 },
   { "date": "Apr 1 2004", "price": 1107.3 },
   { "date": "May 1 2004", "price": 1120.68 },
   { "date": "Jun 1 2004", "price": 1140.84 },
   { "date": "Jul 1 2004", "price": 1101.72 },
   { "date": "Aug 1 2004", "price": 1104.24 },
   { "date": "Sep 1 2004", "price": 1114.58 },
   { "date": "Oct 1 2004", "price": 1130.2 },
   { "date": "Nov 1 2004", "price": 1173.82 },
   { "date": "Dec 1 2004", "price": 1211.92 },
   { "date": "Jan 1 2005", "price": 1181.27 },
   { "date": "Feb 1 2005", "price": 1203.6 },
   { "date": "Mar 1 2005", "price": 1180.59 },
   { "date": "Apr 1 2005", "price": 1156.85 },
   { "date": "May 1 2005", "price": 1191.5 },
   { "date": "Jun 1 2005", "price": 1191.33 },
   { "date": "Jul 1 2005", "price": 1234.18 },
   { "date": "Aug 1 2005", "price": 1220.33 },
   { "date": "Sep 1 2005", "price": 1228.81 },
   { "date": "Oct 1 2005", "price": 1207.01 },
   { "date": "Nov 1 2005", "price": 1249.48 },
   { "date": "Dec 1 2005", "price": 1248.29 },
   { "date": "Jan 1 2006", "price": 1280.08 },
   { "date": "Feb 1 2006", "price": 1280.66 },
   { "date": "Mar 1 2006", "price": 1294.87 },
   { "date": "Apr 1 2006", "price": 1310.61 },
   { "date": "May 1 2006", "price": 1270.09 },
   { "date": "Jun 1 2006", "price": 1270.2 },
   { "date": "Jul 1 2006", "price": 1276.66 },
   { "date": "Aug 1 2006", "price": 1303.82 },
   { "date": "Sep 1 2006", "price": 1335.85 },
   { "date": "Oct 1 2006", "price": 1377.94 },
   { "date": "Nov 1 2006", "price": 1400.63 },
   { "date": "Dec 1 2006", "price": 1418.3 },
   { "date": "Jan 1 2007", "price": 1438.24 },
   { "date": "Feb 1 2007", "price": 1406.82 },
   { "date": "Mar 1 2007", "price": 1420.86 },
   { "date": "Apr 1 2007", "price": 1482.37 },
   { "date": "May 1 2007", "price": 1530.62 },
   { "date": "Jun 1 2007", "price": 1503.35 },
   { "date": "Jul 1 2007", "price": 1455.27 },
   { "date": "Aug 1 2007", "price": 1473.99 },
   { "date": "Sep 1 2007", "price": 1526.75 },
   { "date": "Oct 1 2007", "price": 1549.38 },
   { "date": "Nov 1 2007", "price": 1481.14 },
   { "date": "Dec 1 2007", "price": 1468.36 },
   { "date": "Jan 1 2008", "price": 1378.55 },
   { "date": "Feb 1 2008", "price": 1330.63 },
   { "date": "Mar 1 2008", "price": 1322.7 },
   { "date": "Apr 1 2008", "price": 1385.59 },
   { "date": "May 1 2008", "price": 1400.38 },
   { "date": "Jun 1 2008", "price": 1280 },
   { "date": "Jul 1 2008", "price": 1267.38 },
   { "date": "Aug 1 2008", "price": 1282.83 },
   { "date": "Sep 1 2008", "price": 1166.36 },
   { "date": "Oct 1 2008", "price": 968.75 },
   { "date": "Nov 1 2008", "price": 896.24 },
   { "date": "Dec 1 2008", "price": 903.25 },
   { "date": "Jan 1 2009", "price": 825.88 },
   { "date": "Feb 1 2009", "price": 735.09 },
   { "date": "Mar 1 2009", "price": 797.87 },
   { "date": "Apr 1 2009", "price": 872.81 },
   { "date": "May 1 2009", "price": 919.14 },
   { "date": "Jun 1 2009", "price": 919.32 },
   { "date": "Jul 1 2009", "price": 987.48 },
   { "date": "Aug 1 2009", "price": 1020.62 },
   { "date": "Sep 1 2009", "price": 1057.08 },
   { "date": "Oct 1 2009", "price": 1036.19 },
   { "date": "Nov 1 2009", "price": 1095.63 },
   { "date": "Dec 1 2009", "price": 1115.1 },
   { "date": "Jan 1 2010", "price": 1073.87 },
   { "date": "Feb 1 2010", "price": 1104.49 },
   { "date": "Mar 1 2010", "price": 1140.45 }
];


const config = {
   data,
   xField: 'date',
   yField: 'price',
   height: 300,
};

function CompanyDetailPage() {
   return <>
      <div className='row'>
         <div className='col-lg-6'>
            <h1>Reliance Industries Ltd.</h1>
         </div>
         <div className='col-lg-6'>
            <div className={styles['float-right']} >

               <span className={styles['cur-price']} >
                  2,440.90
               </span>
               <ArrowUpOutlined className={styles['cur-price-icon'] + ' ' + styles['cur-price-up-icon-clr']} />
               <div className={styles['cur-price-change'] + ' ' + styles['cur-price-up-icon-clr']} >
                  +15.3(0.63%)
               </div>
            </div>

         </div>
      </div>

      <div className="row" style={{ marginTop: '20px' }} >
         <div className='col-lg-6' >
            <div >
               <Card title="Price Information" className={styles['card-bg']}>
                  <div className='row' >
                     <div className='col-lg-3'>
                        <p className={styles['overview-data']}>DAY LOW </p>
                        <b> ₹  81,060.30</b>
                        <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>PREV. CLOSE </p>
                        <b> ₹  9,999</b>
                     </div>
                     <div className='col-lg-3'>
                        <p className={styles['overview-data']}>DAY LOW  </p>
                        <b> ₹  9,999</b>
                        <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>OPEN </p>
                        <b> ₹  9,999</b>

                     </div>
                     <div className='col-lg-3'>
                        <p className={styles['overview-data']}>52 WK HIGH  </p>
                        <b> ₹  9,999</b>


                     </div>
                     <div className='col-lg-3'>
                        <p className={styles['overview-data']}>52 WK HIGH  </p>
                        <b> ₹  9,999</b>


                     </div>
                  </div>


               </Card>
            </div>
         </div>
         <div className='col-lg-6' >
            <Card title="Company Overview" className={styles['card-bg']}>
               <div className='row' >
                  <div className='col-lg-4'>
                     <p className={styles['overview-data']}>MARKET CAP </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>PE RATIO </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>FACE VALUE</p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>DEBT</p>
                     <b> ₹  9,999</b>

                  </div>
                  <div className='col-lg-4'>
                     <p className={styles['overview-data']}>ENTERPRISE VALUE  </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>PB RATIO </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>DIV. YIELD </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>ROE</p>
                     <b> ₹  9,999</b>

                  </div>
                  <div className='col-lg-4'>
                     <p className={styles['overview-data']}>NO. OF SHARES  </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>EPS </p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>BETA</p>
                     <b> ₹  9,999</b>
                     <p className={styles['overview-data'] + ' ' + styles['margin-top-ov-data']}>ROCE</p>
                     <b> ₹  9,999</b>

                  </div>
               </div>


            </Card>
         </div>

      </div>

      <div className='row' style={{ marginTop: '20px' }} >
         <div className="col-lg-12" >
            <Card title="Price Chart" className={styles['card-bg']}>
               {antChart ? <antChart.Area
                  {...config}
               /> : ''}
            </Card>

         </div>


      </div>
      <div style={{ marginTop: '20px' }} >
               <CompanyRatios antChart={antChart} />
      </div>

      <div className = 'row' style={{ marginTop: '30px' }}>
               <CompanyPeers/>
      </div>
      <div  style={{ marginTop: '30px' }}>
               <ShareHoldingPattern  antChart={antChart}/>
      </div>
   </>
}

export default CompanyDetailPage
