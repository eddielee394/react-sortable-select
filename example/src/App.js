import React, { useEffect, useState } from 'react'

import SortableSelectInput from 'react-sortable-select'
import 'react-sortable-select/dist/index.css'

const classes = {
  container: {
    margin: 20
  }
}

const defaultItems = []
for (let i = 1; i <= 10; i++) {
  defaultItems.push({
    id: i,
    label: `Item ${i}`,
    class: 'bg-red',
    order: i
  })
}

const App = () => {
  const [itemValues, setItemValues] = useState()
  const [fieldValue, setFieldValue] = useState()

  function handleChipChange(name, value) {
    setFieldValue(value.map((val, index) => ({ ...val, order: index + 1 })))
  }

  function handleOnDragEnd(result) {
    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list)
      const [removed] = result.splice(startIndex, 1)
      result.splice(endIndex, 0, removed)

      return result
    }

    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      fieldValue,
      result.source.index,
      result.destination.index
    )

    setFieldValue(
      items.map((item, index) => ({
        ...item,
        order: index + 1
      }))
    )
  }

  return (
    <div style={classes.container}>
      <SortableSelectInput
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
      />
    </div>
  )
}

export default App
