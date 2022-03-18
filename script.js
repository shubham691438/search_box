document.addEventListener("DOMContentLoaded",function(){

    function auto_suggestion(input,arr)
    {    
        //to store the name of all suggested countries
        var suggestions=document.createElement("div");
        suggestions.setAttribute("id", "suggestions_name");
        var focus;

        //execute when input is entered
        input.addEventListener("input",function(e)   
        {    
                focus=-1;
                var v=this.value,temp;
                
                suggestions.innerHTML='';

                for(var i=0; i< arr.length ;i++)
                {   //contain list of suggestions
                    
                            
                    this.parentNode.appendChild(suggestions);  

                    if (v.toLowerCase()==arr[i].substr(0,v.length).toLowerCase() && (v.length!=0))
                    {
                        temp = document.createElement("div");

                        
                        temp.innerHTML = "<b>" + arr[i].substr(0, v.length) + "</b>";
                        temp.innerHTML += arr[i].substr(v.length);
                        temp.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                
                        //when an item from the suggestion is clicked
                        temp.addEventListener("click", function(e)
                            {
                                input.value = e.target.querySelector('input').value;
                                suggestions.innerHTML='';
                            });
                        
                        
                        //adding temp inside suggestions    
                        suggestions.appendChild(temp);
                        
                            
                        
                    }

                

                    
                    
                }

                
                

        });

        //when a key on keyboard is pressed
        input.addEventListener("keydown", function(e) 
        {   
            //If the arrow DOWN key is pressed,increase the focus
            if (e.keyCode == 40)
            {
                    focus++;
                    adjust();
            }

            //If the arrow UP key is pressed,decrease the currentFocus variable
            else if (e.keyCode == 38)
            { 
                
                focus--; 
                adjust();
            }

            //the ENTER key is pressed, prevent the form from being submitted and set the target country name in the search box
            else if (e.keyCode == 13) 
            {
                
                e.preventDefault();
                input.value = suggestions.getElementsByTagName("div")[focus].querySelector('input').value;
                suggestions.innerHTML='';
                focus=-1;
            }
            
        }); 

        // function to make sure focus is only on the countries of the suggestion_name array and highlight the focused element
        function adjust()
        {    
            //removing highlight from the element
            for (var i = 0; i < suggestions.getElementsByTagName("div").length; i++) 
            {
                suggestions.getElementsByTagName("div")[i].classList.remove("active");
                }



            if (focus >= suggestions.getElementsByTagName("div").length) 
                focus = 0;

            if (focus < 0)
                focus = (suggestions.getElementsByTagName("div").length - 1);

            //adding class to div of suggestions
            suggestions.getElementsByTagName("div")[focus].classList.add("active");    
        } 
        
        

        
        
        
    }





    //array of all countries
    var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    auto_suggestion(document.querySelector("form").input,countries);


});