/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//var fixed_status=['New', 'In progress', 'Feedback', 'Rework', 'Resolved'];
//var fixed_type=['Feature', 'Bug', 'Task'];

function getFixedStatus(){
    var fixed_status=['New', 'In progress', 'Feedback', 'Rework', 'Resolved', 'Ready For Testing'];
    return fixed_status;
}

function getFixedType(){
    var fixed_type=['Feature', 'Bug', 'Task'];
    return fixed_type;
}

function getFixedIssueFields(){
    var fixed_fields=['id', 'type', 'name', 'sprint', 'createdBy', 'assignee', 'description', 
        'status', 'tasks', 'comments', 'updatedAt', 'createdAt'];
    return fixed_fields;
}

function getFixedIssueFieldsFilter(){
    var fixed_fields=['id', 'type', 'name', 'sprint', 'createdBy', 'assignee', 
        'status', 'updatedAt', 'createdAt', 'parentTask'];
    return fixed_fields;
}