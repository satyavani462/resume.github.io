function loadjson(file,callback)
{
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState===4 && xhr.status=="200")
		{
			callback(xhr.responseText);

		}
	};
	xhr.send(null);
}
loadjson("data.json",function(text){
	var data =JSON.parse(text);
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualifications);
	skills(data.technicalskills);
})
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	careerinfo(data.careerobjective);
	education(data.educationalqualifications);
	skills(data.technicalskills);

})
var child1=document.querySelector(".child1");
function basic(det){

    var image=document.createElement("img");
    image.src=det.image;
    child1.appendChild(image);

    var name = document.createElement("h4");
	name.textContent=det.name;
	child1.appendChild(name);


    var number = document.createElement("number");
    number.textContent=det.number;
    child1.appendChild(number);

    var email=document.createElement("a");
    email.href="mailto:srinivasadharmateja1996@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);

    var add= document.createElement("h3");
    add.textContent="Address";
    child1.appendChild(add);

    child1.appendChild(document.createElement("hr"));

    var add1 = document.createElement("p");
    add1.textContent=det.address;
    child1.appendChild(add1);

    
}

var child2=document.querySelector(".child2");
function careerinfo(info1){
	var heading1=document.createElement("h2");
	heading1.textContent="CareerObjective";
	child2.appendChild(heading1);
	child2.appendChild(document.createElement("hr"));
	var heading2=document.createElement("p");
	heading2.textContent=info1.info;
	child2.appendChild(heading2);
}
function education(edu){
	var heading3 = document.createElement("h2");
	heading3.textContent="Educational Qualifications";
	child2.appendChild(heading3);
	child2.appendChild(document.createElement("hr"));
	var table1 =document.createElement("table");
	table1.border="1";
	child2.appendChild(table1);
	tabledata="";
	for(i=0;i<edu.length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear+
		"</td><td>"+edu[i].percentage+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function skills(skillinfo)
{
	var heading4 = document.createElement("h2");
	heading4.textContent="Technical Skills";
	child2.appendChild(heading4);
	child2.appendChild(document.createElement("hr"));
	for(i=0;i<skillinfo.length;i++)
	{
		var title = document.createElement("h4");
		title.textContent=skillinfo[i].title;
		child2.appendChild(title);
		var skillul=document.createElement("ul");
		var skillli=document.createElement("li");
		skillli.textContent=skillinfo[i].info;
		skillul.appendChild(skillli);
		child2.appendChild(skillul);
	}

}