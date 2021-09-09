
import { Layout, Row, Col } from 'antd';
import { MainFooter, MainHeader } from '../src/components'

// import { sample } from 'lodash';
// import axios from "axios";
// import Config from '../src/config/env';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


const { Content } = Layout;

// const baseUrls = Config.getData().default.baseUrl;

function MyApp({ Component, pageProps }) {

  // axios.interceptors.request.use(config => {
  //   config.baseURL = sample(baseUrls);
  //   return config;
  // });



  return <Layout className='page-bg-clr'>
    <MainHeader></MainHeader>

    <Content >
      {/* <h1 style={{marginTop: '150px', textAlign: 'center'}} > Under Development  </h1> */}
      <Row className='min-height-custom' >
        <Col xxl={20} xl={20} lg={20} md={20} sm={24} xs={24} style={{ padding: "50px 10px 59px 56px" }}>        
            <Component {...pageProps} />
        </Col>
        <Col xxl={4} xl={4} lg={4} md={4} sm={24} xs={24}>
          col-12
          </Col>
      </Row>
    </Content>
    <MainFooter></MainFooter>
  </Layout>
}

export default MyApp
