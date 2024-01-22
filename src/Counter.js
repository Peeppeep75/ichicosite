import React, { Component } from 'react';

class Counter extends Comment {
        
    render(){
        return(
            <div>
                <p>Count:</p>
                <button>+</button>
                <button>-</button>
            </div>
        )

    }
}
export default Counter;