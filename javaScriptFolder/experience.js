var Obj={"ObjectOreinted":["Languages:" ,"Java","C++","C","Classes:", "Advanced Object Oriented Programming","Algorithums", "Data Structures"]}
var o,O = "";

for(o in Obj.ObjectOreinted){
  O += "<li>" + Obj.ObjectOreinted[o] + "</li>"
}
 
var Web={"Prog": ["Languages:", "JavaScript", "HTML", "CSS","Several Websites Made","Web design Classes","Good Communication", "Can work alone or in group"]}
var w,W= "";
for(w in Web.Prog){
  W += "<li>" + Web.Prog[w] + "</li>"
}


var Game={"Design": ["Languages:" , "Java", "C++","Advanced Object Oriented","Attributes:","Attention to detail", "Gamer", "Competative","Love to see Projects build over time and finsih"]}
var g,G="";
for(g in Game.Design){
    G+= "<li>" + Game.Design[g]+ "</li>"
  }
  

  function getObj(){
      return O;
  
      
  }

function getWeb(){
    return W;
}

function getGame(){
    return G;
}

