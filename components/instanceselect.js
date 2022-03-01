import { useState } from 'react';
import Select from 'react-select';



export default function InstanceSelect({ instances, onChange }) {

  const formatOptionLabel = ({ host, site_name }) => (
    <div>
      <span>{site_name}</span><br/>
      <span style={{ color: "#ccc" }}>
        {host}
      </span>
    </div>
  );

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
      {instances ? (
        <Select onChange={onChange}
          options={instances.hosts}
          formatOptionLabel={formatOptionLabel}
          isSearchable
          isClearable
          filterOption={filterOptions}
        />
      ) : (
        <div>Loading...</div>
      )}

    </>
  )
}