//import
import React from 'react';  

//create react class
class MyComponent extends React.Component {  
    constructor() {  
        super();  
        //state1
        this.state = { name: 'world' };  
    }  
    render() {  
        return(  
            <>  
                {/* props1 */}
                <h3>Hello, {this.props.name}!</h3>  
                {/* state2 */}
                <h3>Hello, {this.state.name}!</h3>  
            </>
        );  
    }  
}

//export
export default MyComponent;