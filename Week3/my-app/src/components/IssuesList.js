import React from 'react';
import Issues from './Issues.js';

function IssuesList(props){
    const { issues } = props;
    return (
        <div className="issuesList">
            { issues.map((issue) => 
                <Issues {...issue} key = {issue._id} />) }
        </div>
    )
}

export default IssuesList;