import  { useState } from 'react'

import '../css/student.css'
import axios from 'axios';

export default function AddStudent() {

    const [stuid,setStuid] = useState('');
    const [name,setName] = useState('');
    const [college,setCollege] = useState('');
    const [course,setCourse] = useState('');
    const [osMarks,setosMarks] = useState('');
    const [cnMarks,setCnMarks] = useState('');
    const [cLangMarks,setCLangMarks] = useState('');
    const [fee,setFee] = useState('');

    const [resMessage,setResMessage] = useState('');

const saveData = (e:FormDataEvent)=>{

    e.preventDefault();

    console.log(stuid);
    console.log(name);
    console.log(college);
    console.log(course);
    console.log(osMarks);
    console.log(cnMarks);
    console.log(cLangMarks);
    console.log(fee);

    const stuData = {
        
    stuid,
    name,
    college,
    course,
    osMarks,
    cnMarks,
    cLangMarks,
    fee
    }


    axios.post("http://localhost:7788/drk/exam/stu/save",stuData)
    .then(
        (res)=>{
            console.log(res.data);
            setResMessage(res.data);
            setName("");
        }
    )
    


}

const getRollNo = (e:any)=>{
    setStuid( e.target.value);
}
const getName = (e:any)=>{
    setName( e.target.value);
}
const getCollege = (e:any)=>{
    setCollege( e.target.value);
}
const getCourse = (e:any)=>{
    setCourse( e.target.value);
}
const getOsMarks = (e:any)=>{
    setosMarks( e.target.value);
}
const getCnMarks = (e:any)=>{
    setCnMarks( e.target.value);
}
const getCLanagMarks = (e:any)=>{
    setCLangMarks( e.target.value);
}
const getFee = (e:any)=>{
    setFee( e.target.value);
}



  return (
    <div>

<div className='applyColor'>
   <h2>{resMessage}</h2>
</div>
<form  className='addStudent'>
  <div className="mb-3">
    <label  className="form-label">Student RollNo:</label>
    <input 
    onChange={getRollNo}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">Student Name</label>
    <input 
    onChange={getName}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">College</label>
    <input 
    onChange={getCollege}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">Course</label>
    <input 
    onChange={getCourse}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">OS-Marks</label>
    <input 
    onChange={getOsMarks}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">CN-Marks</label>
    <input 
    onChange={getCnMarks}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">C-Lang-Marks</label>
    <input 
    onChange={getCLanagMarks}
    type="text" className="form-control"
    />
  </div>

  <div className="mb-3">
    <label  className="form-label">Fee</label>
    <input 
    onChange={getFee}
    type="text" className="form-control"
    />
  </div>
 
  
  <button 
  onClick={
    (e:any)=>{
    saveData(e);
}}
  type="submit" className="btn btn-primary">Submit</button>
</form>



    </div>
  )
}
