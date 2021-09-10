import { Table, Tabs } from 'antd';
const { TabPane } = Tabs;


const PatternChart = ({ antChart }) => {
  var data = [
    {
      type: 'Promoters',
      value: 50,
    },
    {
      type: 'Mutual Funds',
      value: 5,
    },
    {
      type: 'Domestic Institutions',
      value: 5,
    },
    {
      type: 'Foreign Institutions',
      value: 10,
    },
    {
      type: 'Retail and Others',
      value: 30,
    }
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        return ''.concat(_ref.value, '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return <antChart.Pie {...config} />;
}

function ShareHoldingPattern({ antChart }) {

  return <>
    <div style={{ backgroundColor: '#ffffff' }} className='row'>
      <h3 style={{ padding: '10px', textAlign: 'center' }} >Share Holding Pattern </h3>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Promoters" key="1">
          <div className='row'>
            <div className='col-lg-7' >
              Content of Tab Pane 1
            </div>
            <div className='col-lg-5'>
              <PatternChart antChart={antChart} />

            </div>
          </div>

        </TabPane>
        <TabPane tab="Mutual Funds" key="2">
          <div className='row'>
            <div className='col-lg-7' >
              Content of Tab Pane Mutual Fund
            </div>
            <div className='col-lg-5'>
              <PatternChart antChart={antChart} />

            </div>
          </div>
        </TabPane>
        <TabPane tab="Domestic Institutions" key="3">
          <div className='row'>
            <div className='col-lg-7' >
              Content of Tab DI
            </div>
            <div className='col-lg-5'>
              <PatternChart antChart={antChart} />

            </div>
          </div>
        </TabPane>
        <TabPane tab="Foreign Institutions" key="4">
          <div className='row'>
            <div className='col-lg-7' >
              Content of Tab FI
            </div>
            <div className='col-lg-5'>
              <PatternChart antChart={antChart} />

            </div>
          </div>
        </TabPane>
        <TabPane tab="Retail and Others" key="5">
          <div className='row'>
            <div className='col-lg-7' >
              Content of Tab FI
            </div>
            <div className='col-lg-5'>
              <PatternChart antChart={antChart} />

            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </>

}



export default ShareHoldingPattern;