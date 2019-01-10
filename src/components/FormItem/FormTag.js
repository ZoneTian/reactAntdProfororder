import React , { Component } from 'react'
import { Tooltip,Tag,Icon, Form,Cascader  } from 'antd';

const Json = require('../OrderDetail/json/test.json')
console.log(Json,'Json')
class FormTag extends Component {
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    handleClose = (removedTag) => {
        const { tags } = this.state
        const newtag = tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState( { tags : newtag });
      }
    
    showInput = () => {
        this.setState({ inputVisible: true });
      }
    
      handleInputChange = (value) => {
          console.log(value,'----')
        this.setState({ inputValue: value });
      }
    
      handleInputConfirm = (value,label) => {
          console.log(label)
          let text =[... label && label.map((d)=>{
              return d.label
          }) ]
          text = text.join('/')
        let { tags } = this.state;  
        const { inputValue } = this.state;
        if (value && tags.indexOf(value) === -1) {
          tags = [...tags, text];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });
      }
    
      saveInputRef = input => this.input = input

    render(){
        const { label ,rules, id ,formItemLayout,form ,options, } = this.props;
        const { inputVisible,tags, } = this.state
      return (
        <Form.Item
          {...formItemLayout}
          label={label}
        >
          {form.getFieldDecorator(id, rules)(
            <span>
              {tags.map((tag, index) => {
          const isLongTag = tag.length > 30;
          const tagElem = (
            <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 30)}...` : tag}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
        })}
              {inputVisible && (
              <Cascader options={Json} onChange={this.handleInputConfirm} />

        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            
            style={{ background: '#fff', borderStyle: 'dashed' }}
          >
            <Icon type="plus" /> 添加分类
          </Tag>
        )}
           </span>
        )}
        </Form.Item>
        )
    }
}

export default FormTag