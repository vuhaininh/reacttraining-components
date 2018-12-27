import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure?</ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:50PM"
                    content="Nice blog post!"
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="I like the subject"
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="I like the content"
                    avatar={faker
                    .image
                    .avatar()}/>
            </ApprovalCard>

        </div>
    );
};
ReactDOM.render(
    <App/>, document.querySelector('#root'));