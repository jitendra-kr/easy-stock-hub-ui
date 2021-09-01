
import React, { useState } from 'react';

import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from "./Landing.module.css";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 20,
      color: '#000',
    }}
  />
);

export default function Landing() {

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  return (
    <>
    {/* <div>
      <img src="../../../bg2.PNG" ></img>
    </div> */}
      <div className="row text-center">
      {/* <h1 className={styles['search-heading']} >Easy Stock Hub</h1> */}
      <p className={styles['search-p']} >Helps you to pick good stock and grow more</p>
      <div  className="text-center">

      <AutoComplete
          value={value}
          options={options}
          style={{
            width: '60%',
            marginTop: '10px'
          }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          allowClear={true}
          >
                  <Input className={styles['input']} suffix={suffix} size="large" placeholder="Type here to search" />

            </AutoComplete>
          </div>
      </div>
    </>
  )
}
