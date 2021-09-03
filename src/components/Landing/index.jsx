
import React, { useState, useCallback } from 'react';

import { AutoComplete, Input, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from "lodash";
import { httpGet } from "../../utils";


import styles from "./Landing.module.css";

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 20,
      color: '#0078FF',
      marginRight: '5px'
    }}
  />
);

export default function Landing() {

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSelect = (data) => {
    console.log('onSelect', data);
  };


  const debouncedSearch = useCallback(
    debounce(nextValue => {
      httpGet({
        url: 'http://localhost:3005/api/search/symbol?q=' + nextValue
      }).then((res) => {
        setOptions(res.result.map((o, i) => {
          let data = {
            value: o.securityId,
            label: o.issuerName,
            key: i
          };
          return data;
        }))
        setLoading(false)
      }).catch((e) => {
        setLoading(false)
        console.log(e);
      });
    }, 1000),
    []
  );

  const onChange = event => {
    setOptions([]);
    setValue(event)
    if (event && event.length >= 3) {
      setLoading(true);
      debouncedSearch(event);
    }
  };

  const notFoundContent = () => {
    let str;
    switch (true) {
      case value && value.length < 3:
        str = "Keep Typing..."
        break;
      case loading:
        str = "Loading..."
        break;
      case !loading && !options.length && value && value.length >= 3:
        str = "Stock not found. Please improve search"
        break
      default:
        str = false;
    }
    return str
  }


  return (
    <>
      <div className={styles['m-top-80'] + ' ' + "row"}  >
        <p className={styles['search-p']} >
          Helps you to pick good stock and grow more
          </p>
        <div className="text-center">
          <AutoComplete
            options={options}
            style={{
              width: '60%',
              marginTop: '10px'
            }}
            onSelect={onSelect}
            onChange={onChange}
            allowClear={true}
            notFoundContent={notFoundContent()}
          >
            <Input className={styles['input']} prefix={prefix} size="large" placeholder="Type here to search" />

          </AutoComplete>
        </div>
        <div className='text-center'>        
        <div className={styles['recent-search']} >
          <span className={styles['padding-right-10']} >
            Trending Searches:
          </span>
          <div>
            <Tag color="#E1EFFF" className={styles['tags']} >magenta</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>red</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>volcano</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>orange</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>orange</Tag>
          </div>
        </div>
        <div className={styles['recent-search']} >
          <span className={styles['padding-right-10']} >
            Recent Searches:
          </span>
          <div>
            <Tag color="#E1EFFF" className={styles['tags']} >magenta</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>red</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>volcano</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>orange</Tag>
            <Tag color="#E1EFFF" className={styles['tags']}>orange</Tag>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
