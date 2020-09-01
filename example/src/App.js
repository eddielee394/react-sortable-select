import React, { useState } from 'react'

import SortableSelectInput from 'react-sortable-select'
import 'react-sortable-select/dist/index.css'

const items = []
// const items = {
//   props: {
//     avatar: (
//       <Avatar
//         className={classes.avatarSmall}
//         style={{
//           color: "#cecece",
//           backgroundColor: strength.category_colors[0]
//         }}
//       >
//         {strengthValue.order}
//       </Avatar>
//     )
//   },
//   value: strength.id,
//   label: strength.title,
//   color: strength.category_colors[0],
//   order: strengthValue.order || index + 1
// };
for (let i = 1; i <= 10; i++) {
  items.push({
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
    console.log(name, value.map((val, index) => ({ ...val, order: index + 1 })))
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
      itemValues,
      result.source.index,
      result.destination.index
    )

    setFieldValue(
      'itemValues',
      items.map((item, index) => ({
        ...item,
        order: index + 1
      }))
    )
  }

  return (
    <SortableSelectInput
      className=''
      name='itemValues'
      value={itemValues}
      onChange={(value, index) => handleChipChange('itemValues', value, index)}
      placeholder='Select multiple items'
      textFieldProps={{
        label: 'items',
        variant: 'outlined',
        InputLabelProps: {
          shrink: true
        }
      }}
      options={items.map((item) => ({
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
  )
}

export default App
