
const React = require("react");

class Show extends React.Component {
    render() {
        const { name, img } = this.props.pokemon; 
        return (
            <div>
                <h1>Gotta Catch 'Em All!</h1>
                <a href="/pokemon">Pokemon Index Page</a>
                <h2>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</h2>
                <a href="/pokemon"><img src={`${img}.jpg`} alt={name}></img></a>
            </div>
        )
    }
}

module.exports = Show;