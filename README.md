# react-sortable-select

> Sortable select input component for react. [View demo](https://eddielee394.github.io/react-sortable-select/).

[![NPM](https://img.shields.io/npm/v/react-sortable-select.svg)](https://www.npmjs.com/package/react-sortable-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

##Demo


## Install

```bash
yarn add react-sortable-select
```

## Usage

```jsx
import React, { Component } from 'react'
import SortableSelectInput from 'react-sortable-select'

function App(props){
    const handleChipChange = () => console.log('chip changed');

    const handleOnDragEnd = () => console.log('chip drag completec')

    return (<SortableSelectInput
        className=''
        name='itemValues'
        value={itemValues}
        onChange={(value, index) =>
          handleChipChange('itemValues', value, index)
        }
        placeholder='Select multiple items'
        textFieldProps={{
          label: 'items',
          variant: 'outlined',
          InputLabelProps: {
            shrink: true
          }
        }}
        options={defaultItems.map((item) => ({
          value: item.id,
          label: item.label,
          class: item.class
        }))}
        isMulti
        isSortable
        onDragEnd={handleOnDragEnd}
        fullWidth
        variant='fixed'
      />)
}
```

## License

(MIT) © [eddielee394](https://github.com/eddielee394)
