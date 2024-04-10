/* eslint-disable react/prop-types */
import "@styles/styles/FormEdit.css";
import { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function PracticalExp({ practicalExp, setPracticalExp }) {

  const handleExpEdit = (e,expId) => {
    const newPracticalExp = practicalExp.map((exp) => {
        if (exp.id === expId){
          return {...exp,[e.target.name] : e.target.value}
        }
        return {...exp}
    })
    setPracticalExp(newPracticalExp)
  }

  const handleExpAdd = () => {
    const newPracticalExp = [...practicalExp]
    newPracticalExp.push({
    id:uuidv4(),
    companyName: "",
    positionTitle: "",
    jobResponsibilities: "",
    startWorkDate: "",
    endWorkDate: "",
    })
    setPracticalExp(newPracticalExp)
  }

  const handleExpRemoval = (expId) => {
    const newPracticalExp = practicalExp.filter((_,index) => expId !== index)
    setPracticalExp(newPracticalExp)
  }

  return (
    <div className="form-container-practical-exp">
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <h3>Practical Experience</h3>
      <button onClick={handleExpAdd}>Add Experience</button>
      </div>
      <form id="cv-form" action="" method="POST">
          {practicalExp.map((exp,index) => {
            return (
              <Fragment key={exp.id}>
                            <div className="form-field">
                            <label htmlFor="compamy-name">Company Name:</label>
                            <input
                              type="text"
                              value={practicalExp.companyName}
                              id="company-name"
                              name='companyName'
                              onChange={(e) =>
                                handleExpEdit(e,exp.id)
                              }
                              placeholder="Amazon"
                            ></input>
                          </div>
              
                          <div className="form-field">
                            <label htmlFor="position-title">Position Title:</label>
                            <input
                              type="text"
                              value={practicalExp.positionTitle}
                              id="position-title"
                              name="positionTitle"
                              onChange={(e) =>
                                handleExpEdit(e,exp.id)
                              }
                              placeholder="Full Stack Developer"
                            ></input>
                          </div>
              
                          <div className="form-field">
                            <label htmlFor="job-responsibilities">Job Responsibilities:</label>
                            <textarea
                              type="text"
                              value={practicalExp.jobResponsibilities}
                              id="job-responsibilities"
                              name="jobResponsibilities"
                              onChange={(e) =>
                                handleExpEdit(e,exp.id)
                              }
                              placeholder="Debugging, software developing, etc."
                            ></textarea>
                          </div>
              
                          <div className="form-field">
                            <label htmlFor="start-date">Start Date:</label>
                            <input
                              type="date"
                              value={practicalExp.startWorkDate}
                              id="start-date"
                              name="startWorkDate"
                              onChange={(e) =>
                                handleExpEdit(e,exp.id)
                              }
                            ></input>
                          </div>
                          <div className="form-field">
                            <label htmlFor="end-date">End Date:</label>
                            <input
                              type="date"
                              value={practicalExp.endWorkDate}
                              id="end-date"
                              name="endWorkDate"
                              onChange={(e) =>
                                handleExpEdit(e,exp.id)
                              }
                            ></input>
                          </div>
                          {practicalExp.length > 1  && (<button onClick={() => {handleExpRemoval(index)}}>Remove</button>)}
                        </Fragment>)
            })}
      </form>
    </div>
  );
}

