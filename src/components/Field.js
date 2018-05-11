import React, { PureComponent } from 'react';
import { bindToField } from '../HOC/withFieldStuff';

class Field extends PureComponent {

  render(){
    console.log("RENDERING");
    const {
      fieldApi,
      fieldState,
      children,
      component,
      render,
      ...rest
    } = this.props;

    const props = {
      fieldApi,
      fieldState, 
      ...rest
    };

    if (component) {
      return React.createElement(component, props, children)
    }
    if (render) {
      return render(props)
    }
    if (typeof children === 'function') {
      return children(props)
    }
    return children
  }

}

export default bindToField( Field );