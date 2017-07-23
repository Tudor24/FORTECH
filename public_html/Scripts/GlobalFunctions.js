/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function loadOptions(tag, subTag, elementId){
    var temp = {}, i;
    if(typeof(tag) === "string"){//look for list in localStorage
        if(tag in localStorage){
            temp = JSON.parse(localStorage.getItem(tag));
        }
    }
    else{//pass a list directly
        temp = tag;
    }
    var tempElement = document.getElementById(elementId);
    var length = tempElement.options.length;
    for (i = length-1; i > 0; i--) {//clear existing options
        tempElement.options[i] = null;
    }
    for(i=0;i<temp.length;++i){
        var option = document.createElement("option");
        if(subTag !== "-")//check if passing a subtag
        {
            option.innerHTML = temp[i][subTag];
        }
        else//if not, then take the elemnt in list directly
            option.innerHTML = temp[i];
        tempElement.add(option);
    }
}

function searchParent(id){
    var result = "-", i,
    issues = getItem("issues");
    for(i=0;i<issues.length;++i){
        if(issues[i]["tasks"].indexOf(id) > -1){
            result = issues[i]["id"];
            break;
        }
    }
    return result;
}