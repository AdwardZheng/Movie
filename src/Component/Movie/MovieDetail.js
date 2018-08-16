import React, { PureComponent } from "react";
import Server from "../../Server/server";

class MovieDetail extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
    }

    componentDidMount() {
        this.getMovieDetail();
    }

    getMovieDetail() {
        Server.subject(this.props.match.params.id).then( result => {
            console.log(result);
        });
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default MovieDetail;