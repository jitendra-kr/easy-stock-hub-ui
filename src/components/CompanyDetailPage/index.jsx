
import { Card  } from 'antd';

function CompanyDetailPage() {
   return <>
   <h1>Reliance Industries Ltd.</h1>
   <div className="row" >
       <div className='col-lg-6' >
       <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
       </div>
       <div className='col-lg-6' >

</div>
       
   </div>
   
   </>
}

export default CompanyDetailPage
