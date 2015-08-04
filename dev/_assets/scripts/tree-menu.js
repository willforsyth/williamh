// ideally this should be pulled in from a seperate file

var JSON = {
       "menu":[
          {
             "id":"contact",
             "leaf":true,
             "description":"Contact Us",
             "link":"",
             "content":"contactUs.html",
             "cssClass":"static-content",
             "menu":null
          },
          {
             "id":"rules",
             "leaf":false,
             "description":"Sports Betting Rules",
             "link":"",
             "content":"",
             "cssClass":"",
             "menu":[
                {
                   "id":"types",
                   "leaf":true,
                   "description":"Wager Types",
                   "link":"",
                   "content":"wagerTypes.html",
                   "cssClass":"static-content wager-types",
                   "menu":null
                },
                {
                   "id":"odds",
                   "leaf":true,
                   "description":"Odds & Lines",
                   "link":"",
                   "content":"oddsAndLines.html",
                   "cssClass":"static-content",
                   "menu":null
                },
                {
                   "id":"policies",
                   "leaf":true,
                   "description":"Rules & Policies",
                   "link":"",
                   "content":"rulesAndPolicies.html",
                   "cssClass":"static-content rules-policies",
                   "menu":null
                },
                {
                   "id":"bonuses",
                   "leaf":true,
                   "description":"Sports Bonuses",
                   "link":"",
                   "content":"sportsBonuses.html",
                   "cssClass":"static-content",
                   "menu":null
                }
             ]
          },
          {
             "id":"conditions",
             "leaf":false,
             "description":"Terms & Conditions",
             "link":"",
             "content":"",
             "cssClass":"",
             "menu":[
                {
                   "id":"termsOfService",
                   "leaf":true,
                   "description":"Terms of Service",
                   "link":"",
                   "content":"termsOfService.html",
                   "cssClass":"static-content",
                   "menu":null
                },
                {
                   "id":"privacy",
                   "leaf":true,
                   "description":"Privacy Policy",
                   "link":"",
                   "content":"privacy.html",
                   "cssClass":"static-content",
                   "menu":null
                }
             ]
          },
          {
             "id":"view",
             "leaf":true,
             "description":"View in: Mobile | Full Site",
             "link":"",
             "content":"view.html",
             "cssClass":"static-content",
             "menu":null
          }
       ]
    }



function buildList(data, isMenu){
    var html = (isMenu)?'<ul>':''; 
    html += '<ul>';

    for(item in data){
        html += '<li>';
        if(typeof(data[item].menu) === 'object'){ 
          
          
          // if menu is not null then create new ul 
        
            if(isMenu){
                html += '<a id=" '+ data[item].id +'" class="' + data[item].cssClass + '" href="' + data[item].content + '">' + data[item].description + '</a>';
            } else {
                html += data[item].description; 
            }
         
          // if content is an empty string then its not a link so hide the children and show on click 
          if ( data[item].content != null ){ 
                       
/*             var list = this.children[1];
               list.style.display = "none";
               itemDes.onclick=function(){
               if (list.style.display == "none"){
                        list.style.display = "block";
                  }else{
                     list.style.display = "none";
                }*/

            }
            html += buildList(data[item].menu, true); 
        }
        html += '</li>';
    }
    html += '</ul>';
    html += (isMenu)?'</ul>':'';
    
    return html;
}


