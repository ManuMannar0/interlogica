//import
var React = require('react');  

//create react class
var MyComponent = React.createClass({ 
    //state1 
    getInitialState: function() {  
        return { name: 'world' };  
    },  
    //props1
    propTypes: { name: React.PropTypes.string },  
    render: function() {  
        return(  
            <> 
                {/* props2 */}
                <h3>Hello, {this.props.name}!</h3>
                {/* state2 */}
                <h3>Hello, {this.state.name}!</h3>    
            </>
        );  
    }  
});

//export
module.exports = MyComponent;
   


