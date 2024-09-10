import Carousel from 'antd/es/carousel';
import { useState } from 'react';
import TreeSelect, { TreeSelectProps } from 'antd/es/tree-select';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1'
          },
          {
            value: 'leaf2',
            title: 'leaf2'
          },
          {
            value: 'leaf3',
            title: 'leaf3'
          },
          {
            value: 'leaf4',
            title: 'leaf4'
          },
          {
            value: 'leaf5',
            title: 'leaf5'
          },
          {
            value: 'leaf6',
            title: 'leaf6'
          }
        ]
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf11',
            title: <b style={{ color: '#08c' }}>leaf11</b>
          }
        ]
      }
    ]
  }
];
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};
export default function Signup() {
  const onChangeSlide = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
    console.log('onPopupScroll', e);
  };
  return (
    <div>
      <Carousel afterChange={onChangeSlide}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='Please select'
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
        onPopupScroll={onPopupScroll}
      />
    </div>
  );
}
