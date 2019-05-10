'use strict'; 
const reactElement = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked:false}; 
    }
        render() {
            if(this.state.liked) {
                return `You liked this.`; 
            }

                return  reactElement( 'button', {onClick: () => this.setState({liked:true}) },'Like' ); 
                    
                    
    }
}
                    
                

const domContainer = document.querySelector('#like_button_container');
                    ReactDOM.render(reactElement(LikeButton),
                    domContainer);