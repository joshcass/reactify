var LikeArticle = React.createClass({
    render: function() {
        if (this.state.isLiked) {
            return (<button onClick={this.handleClick}>
            Un-Like Me!
            </button>);
        } else {
            return (<button onClick={this.handleClick}>
                Like Me!
            </button>);
        }
    },
    handleClick: function() {
        var method = this.state.isLiked ? "DELETE" : "POST";
        $.ajax({
            url: '/articles/' + this.props.articleID + "/likes",
            type: method,
            success: function(response) {
                this.setState({isLiked: response.liked});
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {isLiked: this.props.initialIsLiked};
    }
});
