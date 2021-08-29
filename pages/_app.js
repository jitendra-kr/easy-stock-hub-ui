
import { Layout, Row, Col } from 'antd';
import { MainFooter, MainHeader } from '../src/components'

import '../styles/globals.css';
import 'antd/dist/antd.css';


const { Content } = Layout;


function MyApp({ Component, pageProps }) {
  return <Layout>
    <MainHeader></MainHeader>

    <Content>
      <Row>
        <Col span={16} style={{ padding: "50px 45px 59px 56px" }}>        
            <Component {...pageProps} />
        </Col>
        <Col span={8}>
          col-12</Col>
      </Row>
    </Content>
    <MainFooter></MainFooter>
  </Layout>
}

export default MyApp
