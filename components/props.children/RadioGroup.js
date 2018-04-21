import React from 'react';
import RadioButton from './RadioButton';

class RadioGroup extends React.Component {
    constructor() {
      super()
      // Bind the method to the component context
      this.renderChildren = this.renderChildren.bind(this)
    }

    componentDidMount() {
      this.renderChildren(this.props);
    }
  
    renderChildren(props) {
      return React.Children.map(props.children, child => {
        if (child.type === RadioButton)
          return React.cloneElement(child, {
            name: props.name
          })
        else
          return child
      })
    }
  
    render() {
      return (
        <div className="radio-group">
          { this.renderChildren(this.props) }
        </div>
      )
    }
  }

  export default RadioGroup;