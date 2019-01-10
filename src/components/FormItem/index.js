import React , { Component } from 'react'
import {Form , Input} from 'antd'

import FormRadio from './FormRadio'
import FormSelectDate from './FormSelectDate'
import FormTag from './FormTag'

const componentType = {
  "FormRadio":FormRadio,
  "FormSelectDate":FormSelectDate,
  "FormTag":FormTag
}

class FormItem extends Component {
    state = {

    };
  
    render(){
      const { label ,rules, id ,form,type,other,formItemLayout } = this.props;

      const ComponentType = componentType[type]
      const Sitenode = !other ?  ( 
        <Form.Item 
          {...formItemLayout}
          label={label} 
        >
          { form && form.getFieldDecorator(id, rules)(
            <ComponentType {...this.props} /> )}
        </Form.Item> ): <ComponentType {...this.props} />
      return (
        <ComponentType {...this.props} />
        )
    }
}

export default FormItem