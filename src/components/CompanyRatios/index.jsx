import { Card } from 'antd';
import styles from "../CompanyDetailPage/CompanyDetailPage.module.css";


function CompanyRatios({antChart}) { 
  const salesData = [
    {
        type: '2000',
        sales: 38,
    },
    {
        type: '2001',
        sales: 52,
    },
    {
        type: '2002',
        sales: 200,
    },
    {
        type: '2003',
        sales: 145,
    },
    {
        type: '2004',
        sales: 48,
    }
 ];

  const salesConfig = {
    height: 200,
    data: salesData,
    xField: 'type',
    yField: 'sales',
    label: {
        position: 'middle',
        style: {
            fill: '#FFFFFF',
            opacity: 0.6,
        },
    },
    meta: {
        type: { alias: 'Category' },
        sales: { alias: 'Sales' },
    },
 };
    return <>
        <div style={{backgroundColor: '#ffffff'}} className='row' >
        <h3 style={{padding: '10px', textAlign: 'center'}} >Ratios</h3>
        <div className="col-lg-3" >
            <Card title="Sales Growth" className={styles['card-bg']}>
            {antChart ? <antChart.Column 
                  {...salesConfig}
               /> : ''}
            </Card>

         </div>
         <div className="col-lg-3" >
            <Card title="Profit Growth" className={styles['card-bg']}>
            {antChart ? <antChart.Column 
                  {...salesConfig}
               /> : ''}
            </Card>
         </div>
         <div className="col-lg-3" >
            <Card title="ROE" className={styles['card-bg']}>
               {antChart ? <antChart.Column 
                  {...salesConfig}
               /> : ''}
            </Card>
         </div>
         <div className="col-lg-3" >
            <Card title="ROCE" className={styles['card-bg']}>
            {antChart ? <antChart.Column 
                  {...salesConfig}
               /> : ''}
            </Card>
         </div>


        </div>
    </>

}

export default CompanyRatios;