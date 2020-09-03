import React, { useEffect, useState } from 'react'
import SortableSelectInput from 'react-sortable-select'
import { data } from './data'
const classes = {
  container: {
    margin: 20
  }
}

const defaultItems = data

const App = () => {
  const [fieldValues, setFieldValues] = useState([])

  useEffect(() => {
    console.log('fieldValue: ', fieldValues)
  }, [fieldValues])
  function handleChipChange(name, value) {
    setFieldValues(value.map((val, index) => ({ ...val, order: index + 1 })))
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
      fieldValues,
      result.source.index,
      result.destination.index
    )

    setFieldValues(
      items.map((item, index) => ({
        ...item,
        order: index + 1
      }))
    )
  }

  return (
    <div style={classes.container}>
      <SortableSelectInput
        className='select-input'
        name='fieldValues'
        value={fieldValues}
        onChange={(value, index) =>
          handleChipChange('fieldValues', value, index)
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
