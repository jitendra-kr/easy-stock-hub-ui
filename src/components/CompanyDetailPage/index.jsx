
import { Card, Tabs } from 'antd';
const { TabPane } = Tabs;

import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import {
   CompanyPeers,
   ShareHoldingPattern,
   CompanyRatios,
   QuarterlyResults,
   ProfitAndLoss,
   CashFlows,
   PriceChart,
   PeChart,
   PbChart
} from "../index";
import styles from "./CompanyDetailPage.module.css";

let antChart;

if (typeof window !== 'undefined') {
   antChart = require('@ant-design/charts');
}







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
         <div className="col-lg-6 white-bg" >
           
            <Tabs defaultActiveKey="1">
               <TabPane tab="PRICE CHART" key="1">
                  <PriceChart antChart={antChart} />
               </TabPane>
              

            </Tabs>
         </div>
         <div className="col-lg-6 white-bg">
            <Tabs defaultActiveKey="1">
               <TabPane tab="PE CHART" key="1">
                  < PeChart antChart={antChart} />
               </TabPane>
               <TabPane tab="PB CHART" key="2">
                  < PbChart antChart={antChart} />
               </TabPane>

            </Tabs>

         </div>


      </div>
      <div style={{ marginTop: '20px' }} >
         <CompanyRatios antChart={antChart} />
      </div>

      <div className='row' style={{ marginTop: '30px' }}>
         <CompanyPeers />
      </div>
      <div style={{ marginTop: '30px' }}>
         <ShareHoldingPattern />
      </div>
      <div style={{ marginTop: '30px' }}>
         <QuarterlyResults />
      </div>
      <div style={{ marginTop: '30px' }}>
         <ProfitAndLoss />
      </div>
      <div style={{ marginTop: '30px' }}>
         <CashFlows />
      </div>
   </>
}

export default CompanyDetailPage
