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
    var html = (isMenu)?'<div>':''; // Wrap with div if true
    html += '<ul>';
    // var mydata = JSON.parse(data);
    // alert(mydata[0].id);
    // alert(mydata[0].menu);
    for(item in data){
        html += '<li>';
        if(typeof(data[item].menu) === 'object'){ 
          
            // loop over json and find if it has menu

            if(isMenu){
                html += '<a class="' + data[item].content + '" href="' + data[item].content + '">' + data[item].description + '</a>';
            } else {
                html += data[item].id; 
            }
          
            html += buildList(data[item].menu, true); 
          
        } else {
            html += data[item].id 
        }
        html += '</li>';
    }
    html += '</ul>';
    html += (isMenu)?'</div>':'';
    return html;
}

