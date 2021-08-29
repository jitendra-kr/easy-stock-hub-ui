
import { Layout } from 'antd';
import { MainFooter, MainHeader } from '../src/components'

import '../styles/globals.css';
import 'antd/dist/antd.css';


const { Content } = Layout;


function MyApp({ Component, pageProps }) {
   return <Layout>
      <MainHeader></MainHeader>
      <Content><Component {...pageProps} /></Content>
      <MainFooter></MainFooter>
    </Layout>
}

export default MyApp
