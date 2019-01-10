import React , { Component } from 'react'
import { DatePicker,Select  , Form } from 'antd';

const { RangePicker } = DatePicker;
const Option = Select.Option;
class FormSelectDate extends Component {
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
            <span>
              <RangePicker
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD HH:mm"
                placeholder={['开始时间', '结束时间']}
              />
              <Select style={{ width: 180,paddingLeft:30 }}>
                <Option value="paymentTime">支付时间</Option>
                <Option value="orderTime">下单时间</Option>
                <Option value="PlaceTime">Place时间</Option>
                <Option value="Shipping">Shipping</Option>
              </Select>
            </span>
        )}
        </Form.Item>
        )
    }
}

export default FormSelectDate