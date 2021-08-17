import React, {useState,useEffect, Component} from "react";
import "./editsample.css"
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import GetAppIcon from '@material-ui/icons/GetApp';
import "../../App.js";
import Axios from 'axios';



export default class StudentEditPage extends Component {
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.updatechange = this.updatechange.bind(this);
    }

    initialState = {
        id:'',studentNumber:'', lastName:'', firstName:'', middleName:'', email:'', age:'', birthday:'', yearStarted:'', phoneNumber:'', telephoneNumber:'', primaryAddress:'', province:'', city:'', villageorbarangay:'', zipcode:'', highschoolName:'', highschoolAddress:'', highschoolYearGraduated:'', elementaryName:'', elementaryAddress:'', elementaryYearGraduated:'', fatherName:'', fatherOccupation:'', motherName:'', motherOccupation:''

    };

    componentDidMount(){
        const getid = +this.props.match.params.id;
        if(getid){
            this.getstudentbyID(getid)
      

    }
    }
    getstudentbyID = (getid)=>{
        Axios.get('http://localhost:3001/api/get/'+getid)
        .then((response)=> { 
            if(response.data != null) {
                this.setState({
                id:response.data.id ,studentNumber:response.data.studentNumber , lastName:response.data.lastName, firstName:response.data.firstName, middleName:response.data.middleName ,  email:response.data.email, age:response.data.age, birthday:response.data.birthday, yearStarted:response.data.yearStarted, phoneNumber:response.data.phoneNumber, telephoneNumber:response.data.telephoneNumber, primaryAddress:response.data.primaryAddress, province:response.data.province, city:response.data.city, villageorbarangay:response.data.villageorbarangay, zipcode:response.data.zipcode, highschoolName:response.data.highschoolName, highschoolAddress:response.data.highschoolAddress, highschoolYearGraduated:response.data.highschoolYearGraduated, elementaryName:response.data.elementaryName, elementaryAddress:response.data.elementaryAddress, elementaryYearGraduated:response.data.elementaryYearGraduated, fatherName:response.data.Avatar.fatherName, fatherOccupation:response.data.fatherOccupation, motherName:response.data.motherName, motherOccupation:response.data.motherOccupation
            });
            }
        })
        .catch((error)=>{
            console.log("Error")
        })


}
    


    updatechange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
  
 
    render(){
return (
        
            
        <div className="studenteditpage">
  
  
  <div className="userContainer">   
            <div className="userUpdate">

            <div className="namecss"> 
            <form className={'asd'} noValidate autoComplete="off">
             <TextField id="firstName" type="name"  name="firstName" defaultValue={this.state.firstName} label="First Name" onChange={this.updatechange} />
             </form>
             <form className={'asd'} noValidate autoComplete="off">
               <TextField id="lastName" label="Middle Initial" name="middleName" onChange={this.updatechange}/> </form>
             <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" label="Last Name" name="lastName" onChange={this.updatechange}/> </form>
              </div> 

              <div className="namecss2">
             <form className={'asd'} noValidate autoComplete="off">
            
             <TextField id="standard-basic" type="name" label="Student Number" name="studentNumber" onChange={this.updatechange}/></form>
             <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="email" label="Email" name="email" onChange={this.updatechange}/> </form>
             <form className={'asd'} noValidate autoComplete="off">
                <TextField id="standard-basic" type="number" label="Age" name="age" onChange={this.updatechange}/> </form>
           
               </div>

              <div className="basicbday">
              <form className={"asd"} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        name="birthday"
     
        
        className={"asd"}
        InputLabelProps={{
          shrink: true,
        }}
        
        onChange={this.updatechange}/>
    </form> 

    <form className={"asd"}  style={{marginTop:"20px"}} noValidate>
      <TextField
        id="date"
        label="Year Started"
        type="date"
        name="yearStarted"
    
        className={"asd"}
        InputLabelProps={{
          shrink: true,
        }}

        onChange={this.updatechange}
       />
    </form>
             </div>

            <div className="basicinfocss">
        <FormControl className={"asd"}>
        <InputLabel id="courseSelect">Course</InputLabel>
        <Select
          labelId="courseSelect"
          id="courseSelect"
          name="course"
         
          onChange={this.updatechange}
         
          >
          <MenuItem value={'BSIT'}>BSIT</MenuItem>
          <MenuItem value={'BSCS'}>BSCS</MenuItem>
          <MenuItem value={'BSBM'}>BSBM</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={"asd"}>
        <InputLabel id="year">Year</InputLabel>
        <Select
          labelId="year"
          id="yeaR"
          name="yearNumber"
          
          onChange={this.updatechange}
          >
          <MenuItem value={'1st Year'}>1st Year</MenuItem>
          <MenuItem value={'2nd Year'}>2nd Year</MenuItem>
          <MenuItem value={'3rd Year'}>3rd Year</MenuItem>
          <MenuItem value={'4th Year'}>4th Year</MenuItem>
        </Select> 
      </FormControl>
        </div>

        <div className="basicinfocss2">
      <FormControl className={"asd"}>
        <InputLabel id="section">Section</InputLabel>
        <Select
          labelId="section"
          id="sectioN"
          name="section"
          
          onChange={this.updatechange}
          
          >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={"asd"}>
        <InputLabel id="currentyear">Current Year Level</InputLabel>
        <Select
          labelId="currentyear"
          id="currentyear"
          name="currentYear"
          
          onChange={this.updatechange}
          >
          <MenuItem value={'1st Year'}>1st Year</MenuItem>
          <MenuItem value={'2nd Year'}>2nd Year</MenuItem>
          <MenuItem value={'3rd Year'}>3rd Year</MenuItem>
          <MenuItem value={'4th Year'}>4th Year</MenuItem>
        </Select>
        </FormControl>
            </div>


            </div>
            </div>
           

            <div className="semesterselector">
               </div>

            <div className="userotherinfoContainer">

            <div className="schoolinfo">

            <FormControl className={"asd"}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          name="gender"
        
          onChange={this.updatechange}
         >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Undecided'}>Undecided</MenuItem>
          <MenuItem value={'No Comment'}>No Comment</MenuItem>
        </Select>
        </FormControl>
                
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Phone Number" name="phoneNumber" onChange={this.updatechange}/>
                </form>
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Telephone Number" name="telephoneNumber" onChange={this.updatechange}/>
                </form>
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Primary Address" name="primaryAddress" onChange={this.updatechange}/>
                </form>   
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Province" name="province" onChange={this.updatechange}/>
                </form>   
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="City" name="city" onChange={this.updatechange}/>
                </form>   
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Village/Barangay" name="villageorbarangay" onChange={this.updatechange}/>
                </form>
                <form className={'asd'} noValidate autoComplete="off">
               <TextField id="standard-basic" type="name"  label="Zip Code" name="zipcode" onChange={this.updatechange}/>
                </form></div>
  
              <div className="otherinfo">
                
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Highschool Name" name="highschoolName" onChange={this.updatechange}/>
              </form>

              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Highschool Address" name="highschoolAddress" onChange={this.updatechange}/>
              </form>   
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Year Graduated:" name="highschoolYearGraduated" onChange={this.updatechange}/>
              </form>   
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Elementary School Name" name="elementaryName" onChange={this.updatechange}/>
              </form>   
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name" style={{width:250}} label="Elementary School Address" name="elementaryAddress" onChange={this.updatechange}/>
              </form>
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Year Graduated:" name="elementaryYearGraduated" onChange={this.updatechange}/>
              </form></div>


              <div className="infoinfo">
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Father's Name:" name="fatherName" onChange={this.updatechange}/>
              </form>
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Father's Occupation" name="fatherOccupation" onChange={this.updatechange}/>
              </form>
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Mother's Name" name="motherName" onChange={this.updatechange}/>
              </form>
              <form className={'asd'} noValidate autoComplete="off">
             <TextField id="standard-basic" type="name"  label="Mother's Occupation" name="motherOccupation" onChange={this.updatechange}/>
              </form>

           </div>
            
              


                </div>

                  
                <div className="userupdatebutton" >
                  
                    <Button variant="contained" color="primary" style={{fontSize:'12px',backgroundColor: 'teal', }} className="userAddButton" >
                    Update
                    </Button>         
                    
                
                  </div>

        </div>
    )
}
}