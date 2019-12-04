import React from 'react'
import {storiesOf} from '@storybook/react';

import List from '.';

const data = [{
  _id: 1234,
  name: 'Chapter name',
  role: 'lesson description',
  scenes:[{
    id: 123,
    name: 'Scene name'
  }]
}]
  
storiesOf('List', module).add('Default', () => <List data={data}/>)