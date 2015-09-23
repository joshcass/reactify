var Article = React.createClass({
    getInitialState: function(){
        return {
            article: this.props.article,
        }
    },
    url: function(){
        return '/article/' + this.state.article.id;
    },
    editUrl: function(){
        return this.url() + '/edit';
    },
    deleteHandler: function(){
        this.props.deleteHandler(this.props.article.id);
    },
    render: function(){
        return (
            <li>
                <a href={this.url()}>{this.state.article.title}</a>
                <span className="tag_list">
                    {this.state.article.tagList}
                </span>
                <span className="actions">
                    <a href={this.editUrl()}><img src={'assets/page_edit.png'} /></a>
                    <a href='#' onClick={this.deleteHandler}><img src={'assets/cancel.png'} /></a>
                    <LikeArticle articleID={this.state.article.id} initialIsLiked={this.state.article.liked} />
                </span>
                <span>
                    {this.state.article.commentsCount + "Comments"}
                </span>
            </li>
        )
    }
});
