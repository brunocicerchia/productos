import React from 'react';

class WelcomeClass extends React.Component {
    render() {
        return <div>Proyecto a cargo de {this.props.nombre}</div>
    }
}

export default WelcomeClass;