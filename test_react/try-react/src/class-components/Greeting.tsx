import React from 'react'
interface GreetingProps {
  name?: string
}

interface GreetingState {
  message: string
}

export default class Greeting extends React.Component<GreetingProps> {
  constructor(props: GreetingProps) {
    super(props)
    this.state = {
      message: `hello from, ${props.name}`
    }
  }
  state: GreetingState;
  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state)
    return state
  }
  render() {
    console.log("rendering Greeting")
    if (!this.props.name) {
      return <div>no name given</div>
    }
    return <div>
      {this.state.message}
    </div>
  }
}