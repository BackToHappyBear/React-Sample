import Mock from 'mockjs'

Mock.mock('/api/form', 'get', {
  status: 200,
  message: '成功',
  data: {
    username: 'lee',
    password: '123',
    datePicker: undefined,
  },
})
