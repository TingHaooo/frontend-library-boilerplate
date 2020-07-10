import { sayHello } from '../index'

const spy = jest.spyOn(console, 'log')

describe('SayHello Testing', () => {
  it('After sayHello function executed, console log Hello World!', () => {
    sayHello()
    expect(spy).toBeCalledWith('Hello World!')
  })
})
