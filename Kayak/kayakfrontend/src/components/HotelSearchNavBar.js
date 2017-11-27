import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
var divStyle = {
 position: "relative",
    top: "-40px",
    left: "115px"
  
};

var places = [
      "San Jose",
      "San Fransisco",
      "New York",
      "Dallas",
      "Nevada",
      "Milpitas",
      "Colonnade",
      "Stanford",
      "Newark",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell"
    ];
class HotelSearchBox extends Component {
    constructor(props){
        super(props);
     this.state = {
             flag:false
        }
    }
   
     componentDidMount() {
          var options = '';

  for(var i = 0; i < places.length; i++)
    options += '<option value="'+places[i]+'" />';

  document.getElementById('placeList').innerHTML = options;
    }
         
    
    
     addRoom(){
        document.getElementById("removeRoomBtn").disabled = false;
       document.getElementById("roomTextBtn").innerHTML= parseInt(document.getElementById("roomTextBtn").innerHTML)+parseInt("1");
if((parseInt(document.getElementById("roomTextBtn").innerHTML))>=8)
            {
    document.getElementById("addRoomBtn").disabled = true;
                document.getElementById("removeRoomBtn").disabled = false;
}
        var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
        
         var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
      if(parseInt(document.getElementById("roomTextBtn").innerHTML)>GuestCount)
          {
document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)+parseInt("1");
              var result1=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result1; 
          }
        
    }
    
     removeRoom(){
         if((parseInt(document.getElementById("roomTextBtn").innerHTML))!=1)
            {
         document.getElementById("addRoomBtn").disabled = false;
       document.getElementById("roomTextBtn").innerHTML= parseInt(document.getElementById("roomTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("roomTextBtn").innerHTML))<=1)
            {
    document.getElementById("removeRoomBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
            }
         else{
            document.getElementById("removeRoomBtn").disabled = true; 
}
        
    }
    
     addAdult(){
        document.getElementById("removeAdultBtn").disabled = false;
      debugger;
        if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML)))<32)
            {
                 document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)+parseInt("1");
                
}
       
if(((parseInt(document.getElementById("adultTextBtn").innerHTML))+(parseInt(document.getElementById("childrenTextBtn").innerHTML)))>=32)
            {
                
                  document.getElementById("addAdultBtn").disabled = true;
                document.getElementById("removeAdultBtn").disabled = false;
}
            if((parseInt(document.getElementById("roomTextBtn").innerHTML)*4)<((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML))))
             {
          var a=Math.ceil(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))/4) ;
                 
                 document.getElementById("roomTextBtn").innerHTML=a;
                 
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
    }
    
     removeAdult(){
        document.getElementById("addChildrenBtn").disabled = false;
        document.getElementById("addAdultBtn").disabled = false;
       document.getElementById("adultTextBtn").innerHTML= parseInt(document.getElementById("adultTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("adultTextBtn").innerHTML))<=0)
            {
    document.getElementById("removeAdultBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
    }
    
    
      addChildren(){
          document.getElementById("removeChildrenBtn").disabled = false;
         if(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))<32)
            {
                document.getElementById("childrenTextBtn").innerHTML= parseInt(document.getElementById("childrenTextBtn").innerHTML)+parseInt("1");
                 document.getElementById("removeChildrenBtn").disabled = false;
            }
       
if(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))>=32)
            {
                
    document.getElementById("addChildrenBtn").disabled = true;
                document.getElementById("removeChildrenBtn").disabled = false;
}
         
         if((parseInt(document.getElementById("roomTextBtn").innerHTML)*4)<((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML))))
             {
              var a=Math.ceil(((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)))/4) ;
                 
                 document.getElementById("roomTextBtn").innerHTML=a;
                 
}
          var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
         
    }
    
     removeChildren(){
        if((parseInt(document.getElementById("childrenTextBtn").innerHTML))!=0)
            {
         document.getElementById("addChildrenBtn").disabled = false;
        document.getElementById("addAdultBtn").disabled = false;
       document.getElementById("childrenTextBtn").innerHTML= parseInt(document.getElementById("childrenTextBtn").innerHTML)-parseInt("1");
if((parseInt(document.getElementById("childrenTextBtn").innerHTML))<=0)
            {
    document.getElementById("removeChildrenBtn").disabled = true;
}
         var roomCount=document.getElementById("roomTextBtn").innerHTML;
        var GuestCount=((parseInt(document.getElementById("childrenTextBtn").innerHTML))+(parseInt(document.getElementById("adultTextBtn").innerHTML)));
        var result=roomCount+" rooms,"+GuestCount+" guests";
        document.getElementById("roomInfoTxtBox").value=result;
            }
         else{
             document.getElementById("removeChildrenBtn").disabled = true;
}
    }
    
     showHideChangePopUpjQ(m) {
    var disp = m === 'hide' ? 'none' : 'block';
    //$('#div_change_qty').css("display", disp);
          document.getElementById("div_change_qty").style.display=disp;
}
    popUpClose(){
       //$('#div_change_qty').css("display", 'none'); 
       // document.getElementById("div_change_qty").css("display", 'none');
        document.getElementById("div_change_qty").style.display='none';
}
    popUpDisplay(){
        //$('#div_change_qty').css("display", 'block');
         document.getElementById("div_change_qty").style.display= 'block';
}

    
     
	
    myFunction() {
   }
calendarDisplay(){
    debugger;
     // var date_input=$('input[name="date"]'); //our date input has the name "date"
     var date_input= document.getElementsByName("date")
		var container='#aaa'
		date_input.datepicker({
			format: 'D mm/dd',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
}


        render() {
         
                          return (
                              
         <div className = "Navbar">
<div className = "container-fluid" >
<div className = "row">
<div className = "col-sm-4 col-xs-4">
<input type = "text" className = "form-control" list="placeList" id = "usr"/>
                              <datalist id="placeList"></datalist>
</div>
<div className = "col-sm-2 col-xs-2" id = "aaa">
<input className = "form-control datepicker" id = "date" name = "date"  placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()}/>

</div>
<div className = "col-sm-2 col-xs-2">
<input className = "form-control datepicker" id = "date1" name = "date" placeholder = "MM/DD/YYYY" type = "date" onClick={()=>this.myFunction()} />

</div>

<div className = "col-sm-3 col-xs-3">
<input type = "text" className = "form-control" value="1 room,3 guests" id = "roomInfoTxtBox" readOnly onFocus = {()=>this.showHideChangePopUpjQ("show")}/><i className = "glyphicon glyphicon-user usericon" style={divStyle} onClick={()=>this.popUpDisplay()} ></i>
<div id = 'div_change_qty' name = 'div_change_qty' >
<table width = '100%' height = '100%'>
    <tbody>
<tr><td width = '50%'>Occupancy</td>
<td width = '20%'><button  type = "button" className = "hideBtn">
+
</button>
</td>

<td width = '20%'><button  type = "button"  className = "hideBtn">
-
</button>
</td>
<td width = '10%'>

<span className = "spanClose" onClick ={()=>this.popUpClose()}><b>X</b>

</span></td>
</tr>


<tr className = "borderclassName"><td width = '50%'>Rooms</td>
<td width = '10%'><button type = "button" id = "addRoomBtn" onClick ={()=>this.addRoom()} className = "btn btn-default">
+
</button>
</td>
<td width = '10%'><span id = "roomTextBtn">1

</span></td>
<td width = '10%'><button type = "button" className = "btn btn-default" id = "removeRoomBtn" onClick ={()=>this.removeRoom()}>
-
</button>
</td>
</tr>

<tr className = "borderclassName"><td width = '50%'>Adults</td>
<td width = '10%'><button type = "button" id = "addAdultBtn" onClick ={()=>this.addAdult()} className = "btn btn-default">
+
</button>
</td>
<td width = '10%'><span id = "adultTextBtn">3

</span>
</td>
<td width = '10%'><button type = "button" id = "removeAdultBtn" className = "btn btn-default" onClick = {()=>this.removeAdult()}>
-
</button>
</td>
</tr>

<tr><td width = '50%'>Childrens</td>
<td width = '10%'><button type = "button" id = "addChildrenBtn" className = "btn btn-default" onClick = {()=>this.addChildren()}>
+
</button>
</td>
<td width = '10%'><span id = "childrenTextBtn" >
0
</span>
</td>
<td width = '10%'><button type = "button" id = "removeChildrenBtn" className = "btn btn-default" 
                      onClick ={()=>this.removeChildren()}>
-
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className = "col-sm-1 col-xs-1">
<button type = "button" className = "btn btn-warning form-control buttonField " onClick={this.props.clickSearchevent}>
<span className = "glyphicon glyphicon-search"></span>
</button>
</div>
</div>
</div>
</div>
   
                 );
}
}

export default withRouter(HotelSearchBox);
