import { useState } from 'react';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';



export default function InstanceSelect({ instances, onChange }) {

  const formatOptionLabel = ({ host, site_name }, { inputValue }) => {
    return (
      <div>
        <span>
          <Highlighter searchWords={[inputValue]} textToHighlight={site_name} />
        </span>
        <br />
        <span style={{ color: "#ccc" }}>
          <Highlighter searchWords={[inputValue]} textToHighlight={host} />
        </span>
      </div>
    )
  };

  if (instances) {
    for (let i = 0; i < instances.length; i++) {
      instances[i].label = instances[i].site_name;
      instances[i].value = instances[i].host;
    }
  }

  const filterOptions = (option, inputValue) => {
    //console.log(option.data);
    //console.log(inputValue);
    if (inputValue) {
      return option.data.host.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
        option.data.site_name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0;
    }
    return true;
  };
  return (
    <>

      <Select onChange={onChange}
        options={instances ? instances.hosts : []}
        formatOptionLabel={formatOptionLabel}
        isSearchable
        isClearable
        isLoading={!instances}
        filterOption={filterOptions}
        getOptionLabel={option => option.site_name}
        getOptionValue={option => option.host}
      />


    </>
  )
}