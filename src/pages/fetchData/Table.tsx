import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Icon, Input, DatePicker, Button } from 'antd'
import './Table.scss'
import { FormComponentProps } from 'antd/es/form'
import Axios from 'axios'

type OwnProps = {}

type UserFormProps = FormComponentProps & OwnProps

const Table = (props: UserFormProps) => {
  const { getFieldDecorator } = props.form

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (err) return
      console.log(values)
    })
  }

  const [defaultValue, setDefaultValue] = useState({
    username: '',
    password: '',
    datePicker: undefined,
  })
  useEffect(() => {
    Axios.get('/api/form').then(res => setDefaultValue(res.data.data))
  }, [])

  return (
    <>
      <Form className="ant-advanced-search-form" onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="username">
              {getFieldDecorator('username', {
                initialValue: defaultValue.username,
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="password">
              {getFieldDecorator('password', {
                initialValue: defaultValue.password,
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="datePicker">
              {getFieldDecorator('date-time-picker', {
                initialValue: defaultValue.datePicker,
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Form.create<UserFormProps>()(Table)
