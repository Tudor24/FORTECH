/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getItem(item){
    res = [];
    if(item in localStorage)
        res = JSON.parse(localStorage.getItem(item));
    return res;
}

function setItem(item, itemList){
    if(itemList.constructor === Array){
        localStorage.setItem(item, JSON.stringify(itemList));
    }
}

function getDate(){
    var date = new Date();
    return date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
}