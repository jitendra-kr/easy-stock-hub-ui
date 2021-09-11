import { Table } from 'antd';


function ShareHoldingPattern() {
  const columns = [
    {
      title: 'PARTICULAR',
      dataIndex: 'PARTICULAR',
      key: 'PARTICULAR',
      render: text => <a>{text}</a>,
    },
    {
      title: 'JUN 2020',
      dataIndex: 'JUN2020',
      key: 'JUN2020',
      render: text => <a>{text}</a>,
    },
    {
      title: 'SEP 2020',
      dataIndex: 'SEP2020',
      key: 'SEP2020',
    },
    {
      title: 'DEC 2020',
      dataIndex: 'DEC2020',
      key: 'DEC2020',
    },
    {
      title: 'MAR 2021',
      key: 'MAR2021',
      dataIndex: 'MAR2021'
    },
    {
      title: 'JUN 2021',
      key: 'JUN2021',
      dataIndex: 'JUN2021'
    }
  ];
  
  const data = [
    {
      key: '1',
      PARTICULAR: 'Promoters',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '2',
      PARTICULAR: 'Shareholding Pledge',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '3',
      PARTICULAR: 'Mutual Funds',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '4',
      PARTICULAR: 'Promoters',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '5',
      PARTICULAR: 'Domestic Institutions',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '6',
      PARTICULAR: 'Foreign Institutions',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    {
      key: '7',
      PARTICULAR: 'Retail and Others',
      JUN2020: 32,
      SEP2020: 32,
      DEC2020: 54,
      MAR2021: 21,
      JUN2021: 19
    },
    
  ];
  return <>
    <div style={{ backgroundColor: '#ffffff' }} className='row'>
      <h3 style={{ padding: '10px', textAlign: 'center' }} >Share Holding Pattern </h3>
      <div className='col-lg-12' >
      <Table columns={columns} dataSource={data} pagination = {false}/>
      </div>
      
    </div>
  </>

}



export default ShareHoldingPattern;