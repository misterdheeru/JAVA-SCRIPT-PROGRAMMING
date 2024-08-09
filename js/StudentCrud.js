    
            unv =  ["-select-","JAWARAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY (JNTU)", "OSAMANIA UNIVERSITY"];
            con =  ["-select-" , "INDIA ","USA"];
            stat = ["-select-","ANDHRA PRADESH","TEALANGANA"];
            prog=["-select-","BTECH PROGRAM ","EEE","ECE","CSE","DEGREE PROGRAM","BCA","BSC","BCOM"];
            college= ["-select-","BTECH COLLEGES" ,"Mallareddy Engineering College","DEGREE COLLEGES","Siddhartha Degree college"];
            cit = ["-select-","HYDRABAD","VIZAG"];
            yer = ["-select-","2021","2022","2023"];

    function loadform()
    {
      
         universityDropDown = document.getElementById("unver") ;
         countrysDropDown = document.getElementById("country")
         statesDropDown = document.getElementById("state");
         programDropDown = document.getElementById("program");
         CollegeDropDown = document.getElementById("clg");
         CityDropDown = document.getElementById("city");
         YearDropDown = document.getElementById("year");
         unversityoptions = ["-select-","JNTU","OU"];

            university =  ["-select-","JAWARAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY (JNTU)", "OSAMANIA UNIVERSITY"];
            country =  ["-select-" , "INDIA ","USA"];
            state = ["-select-","ANDHRA PRADESH","TEALANGANA"];
            program=["-select-","BTECH PROGRAM ","EEE","ECE","CSE","DEGREE PROGRAM","BCA","BSC","BCOM"];
            College= ["-select-","BTECH COLLEGES" ,"Mallareddy Engineering College","DEGREE COLLEGES","Siddhartha Degree college"];
            City = ["-select-","HYDRABAD","VIZAG"];
            year = ["-select-","2021","2022","2023"];

        //WITHOUT USING THE FOR LOOP 

        //   options1 = document.createElement("option");
        //   options2 = document.createElement("option");
        //   options3 = document.createElement("option");

        //   options1.textContent='-select-';
        //   options2.innerHTML=`${university[0]}`;
        //   options3.innerHTML=`${university[1]}`;
          
        //   universityDropDown.appendChild(options1);

        //   universityDropDown.appendChild(options2);
        //   universityDropDown.appendChild(options3);



        //USING THE FOR LOOP  FOR UNIVERSITY DROPDOWN
          for(var i =0 ; i<university.length ; i++)
          {
            options = document.createElement("option");
            options.innerHTML =`${university[i]}`;  
              
         for(var n = 0 ; n<unversityoptions.length ; n++)
          {
            options.value=`${unversityoptions[i]}`;  


            universityDropDown.appendChild(options);
          }
              

             
          }

        //USING THE FOR LOOP  FOR COUNTRY DROPDOWN
        for(var n = 0 ; n<country.length ; n++)
        {
            options = document.createElement("option");
            options.innerHTML =`${country[n]}`;           
            countrysDropDown.appendChild(options)
        }

       //USING THE FOR LOOP  FOR STATE DROPDOWN
       for(var i = 0 ; i <state.length ;i++)
       {
        options = document.createElement("option")
        options.innerHTML=`${state[i]}`;
        statesDropDown.appendChild(options);
       }

       //USING THE FOR LOOP  FOR PROGRAM DROPDOWN
       for(var i =0 ; i< program.length ; i++)
       {
        options = document.createElement("option");
        if(i==1)
       {
        options.innerHTML=`${program[i]}`;
        options.style ="background-color:red; color :white;font-weight: bold;";
       }
       if(i==5)
       {
        options.innerHTML=`${program[i]}`;
        options.style ="background-color:red; color :white;font-weight: bold;";
       }
        options.innerHTML=`${program[i]}`;
        programDropDown.appendChild(options);
       }

       //USING THE FOR LOOP  FOR COLLEGE DROPDOWN
       for(var i =0 ; i<College.length ; i++)
       {

        options = document.createElement("option");
        if(i==1)
       {
        options.innerHTML=`${College[i]}`;
        options.style ="background-color:red; color :white;font-weight: bold;";
       }

       if(i==3)
       {
        options.innerHTML=`${College[i]}`;
        options.style ="background-color:red; color :white;font-weight: bold;";
       }
        options.innerHTML=`${College[i]}`;
        CollegeDropDown.appendChild(options);

       }

      //USING THE FOR LOOP  FOR CITY DROPDOWN
      for(var i = 0 ; i<City.length ; i++)
       {
         options = document.createElement("option");
         options.innerHTML = `${City[i]}`;
         CityDropDown.appendChild(options);
       }
       
     //USING THE FOR LOOP  FOR YEAR DROPDOWN
     for(var i =0 ; i<year.length ; i++)
     {
        options = document.createElement("option");
        options.innerHTML=`${year[i]}`;
        YearDropDown.appendChild(options);
     }

// WE NEED TO USE 
//      <select>
//     <optgroup label="CITY 1">
//         <option>City 1 branch A</option>
//         <option>City 1 branch B</option>
//         <option>City 1 branch C</option>
//     </optgroup>

//     <optgroup label="CITY 2">
//         <option>City 2 branch A</option>
//         <option>City 2 branch B</option>
//     </optgroup>
// </select>

    }

 var myForm = document.getElementById("myForm");
 
 var count_ID = 1;

 /**
  * We are performing an submit event 
 */
 myForm.addEventListener("submit" , event=>{
    event.preventDefault(),
  
  
    /**
     * Here We are Makeing Table Display As inline-table 
     * we are displaying the table  when button click
    */
    table = document.getElementById("table");
    table.style="display:inline-table;";

    /**
     * Here We are initialize the values into td
    */
    FirstName = document.getElementsByName("fname");
    SurName = document.getElementById("surname");
    unversity = document.getElementById("unver");
    email = document.getElementById("email");
    country = document.getElementById("country");
    clg = document.getElementById("clg");
    age = document.getElementById("age");
    state = document.getElementById("state");
    program = document.getElementById("program");
    Mobile = document.getElementById("mob");
    city = document.getElementById("city");
    year = document.getElementById("year");
 

    /**
     * We are Performing Autoincrement id logic
    */
    var finalcountID;
    function count()
    {
        finalcountID =   this.count_ID++
    }
    count()

    var tbody = document.getElementById("tbody");

    tr = document.createElement("tr");
 

        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        td5 = document.createElement("td");
        td6 = document.createElement("td");
        td7 = document.createElement("td");
        td8 = document.createElement("td");
        td9 = document.createElement("td");
        td10 = document.createElement("td");
        td11 = document.createElement("td");
        td12 = document.createElement("td");
        td13 = document.createElement("td");
        td14 = document.createElement("td");

        td1.innerHTML=`${finalcountID}`;
        td2.innerHTML=`${FirstName[0].value}`;
        td3.innerHTML=`${SurName.value}`;
        td4.innerHTML=`${age.value}`;
        td5.innerHTML=`${Mobile.value}`;
        td6.innerHTML=`${email.value}`;
        td7.innerHTML=`${country.value}`;
        td8.innerHTML=`${state.value}`;
        td9.innerHTML=`${city.value}`;
        td10.innerHTML=`${unversity.value}`;
        td11.innerHTML=`${clg.value}`;
        td12.innerHTML=`${program.value}`;
        td13.innerHTML=`${year.value}`;
        td14.innerHTML=`<button class ="btn btn-primary">Update</button> <br> <br> <button class="btn btn-danger">Delete</button>`;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    tr.appendChild(td8)
    tr.appendChild(td9)
    tr.appendChild(td10)
    tr.appendChild(td11)
    tr.appendChild(td12)
    tr.appendChild(td13)
    tr.appendChild(td14)
    tbody.appendChild(tr)

   
    /**
     * This Function is used to clear the text input fields after inserting the values
    */
    function clearingtextbox_values()
    {
        FirstName[0].value="";
        SurName.value="";
        unversity.value= this.unv[0];
        email.value="";
        country.value=this.con[0];
        clg.value=this.college[0];
        age.value="";
        state.value=this.stat[0];
        program.value=this.prog[0];
        Mobile.value="";
        city.value=this.cit[0];
        year.value=this.yer[0];
 

    }
    clearingtextbox_values();

 })
