import React , { Component } from 'react'
import { connect } from 'dva'
import { Form, Button, } from 'antd'

import FromItem from '@/components/FormItem'

const FormJson = require('./json/Form.json')

const formItemLayout = {
    labelCol :{
        span:3
    },
    wrapperCol :{
        span:12
    }
}
@connect(({Citylist})=>({
  Citylist,
}))
class OrderTable_ extends Component {
  state = {};

  componentDidMount(){
   
    const { dispatch } = this.props
    console.log('1',this.props)
    dispatch({type:'order/queryCity'})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render(){
      const { Citylist } = this.props;
      console.log(Citylist,'Citylist')
      return ( 
        <Form onSubmit={this.handleSubmit}>
          {
            FormJson.map( d=>{ 
              const props = {...this.props,...d ,formItemLayout}
              return <FromItem key={d.id} {...props} />
            })
          }
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            //   disabled={hasErrors(getFieldsError())}
            >
            搜索
            </Button>
          </Form.Item>
        </Form>
      )
  }

}
const OrderTable = Form.create({})(OrderTable_);

export default OrderTable
// import {}
