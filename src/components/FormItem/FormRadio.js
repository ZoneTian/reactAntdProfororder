import React , { Component } from 'react'
import { Radio, Form } from 'antd';

const RadioGroup = Radio.Group;
class FormRadio extends Component {
    state = {

    };
  
    render(){
        const { label ,rules, id ,formItemLayout,form ,options, } = this.props;
      return (
        <Form.Item
          {...formItemLayout}
          label={label}
        >
          {form.getFieldDecorator(id, rules)(
            <RadioGroup options={options} />
        )}
        </Form.Item>
        )
    }
}

export default FormRadio