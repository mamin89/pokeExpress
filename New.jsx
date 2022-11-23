
const React = require("react");

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Pokemon</h1>
                <nav>
                    <a href="/pokemon">Pokemon Index Page</a>
                </nav><br />
                <form action="/pokemon" method="POST">
                    Name:  <input type="text" name="name" /><br />
                    Image: <input type="text"  name="img"  /><br /><br />
                    <input type="submit" value="Create Pokemon"></input>
                </form>
            </div>
        )
    }
}

module.exports = New