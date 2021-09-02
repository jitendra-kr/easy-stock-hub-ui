
import React, { useState, useCallback } from 'react';

import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from "lodash";
import { httpGet } from "../../utils";


import styles from "./Landing.module.css";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
  label: "111",
  l: 1
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
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
    console.log(options)
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };


  const debouncedSearch = useCallback(
    debounce(nextValue => {
      setLoading(true);
      httpGet({
        url: 'http://localhost:3005/api/search/symbol?q=' + nextValue
      }).then((res) => {
        setOptions(res.result.map((o, i) => {
          
          o.value = o.symbol;
          o.label = o.description;
          o.displaysymbol = o.displaySymbol;
          o.key = i
          delete o.displaySymbol;
          return o;
        }))
        setLoading(false)
      }).catch((e) => {
        setLoading(false)
        console.log(e);
      })
      console.log(nextValue)
      
    }, 1000),
    []
);

const onChange = event => {
    setValue(event)
    setOptions([]);
    console.log(value);
    debouncedSearch(event);
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
          options={options}
          style={{
            width: '60%',
            marginTop: '10px'
          }}
          onSelect={onSelect}
          onChange={onChange}
          allowClear={true}
          notFoundContent={!value.length ? false : loading && value.length && options.length === 0 ? "Loading" : !loading && !options.length && value ? 'No Data Found' : false }
          >
                  <Input className={styles['input']} suffix={suffix} size="large" placeholder="Type here to search" />

            </AutoComplete>
          </div>
      </div>
    </>
  )
}
