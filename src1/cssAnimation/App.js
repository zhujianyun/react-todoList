import React , { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.eventStatue = this.eventStatue.bind(this);
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map( (item, index) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames="fade"
                                    appear={true}
                                    unmountOnExit
                                    onEntered={this.eventStatue('onEntered')}
                                    key={index}
                                >
                                    <div className="css_demo">{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                
                <button onClick={this.handleToggle}>Toggle</button>
            </Fragment>
        )
    }
    handleToggle() {
        this.setState( (prev) => ({
            show: !prev.show,
            list: [...prev.list, 'item']
        }));
    }
    eventStatue(statue) {
        return;
        console.log(statue);
    }
}

export default App;