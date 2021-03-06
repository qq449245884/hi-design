import React, { Children, useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Tree from './tree'

export default {
  title: 'Example/Tree',
  component: Tree
} as Meta


const DefaultTreeTmp: Story<TreeProps> = () => {
  const [array, setArray] = useState([{
    text: '1',
    value: '1',
    children: [
      { 
        text: '1.1', value: '1.1',
        children: [
          {
            text: '1.1.1', value: '1.1.1'
          },
          {
            text: '1.1.2', value: '1.1.2'
          }
        ]
      },
      { text: '1.2', value: '1.2'},
    ]
  },{
    text: '2',
    value: '2',
    children: [
      { text: '2.1', value: '2.1'},
      { text: '2.2', value: '2.2'},
    ]
  }])
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  // const [selectedValue, setSelectedValue] = useState('1')
  return (
    <div style={{width: 200}}>
      selectedValue: {selectedValues}
      <Tree sourceData={array}
        selected={selectedValues}
        onChange={(value: string[]) => setSelectedValues(value)}
        multiple={true}
      ></Tree>
    </div>
  )
}


export const defaultTree = DefaultTreeTmp.bind({});
defaultTree.storyName = 'Tree'
