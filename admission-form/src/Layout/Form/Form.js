import './Form.css'
import React from "react"
import FormFeild from '../../commonForm/commonForm'
const Addmissionformdata = {
    heading: "SHRI KALYAN SINGH GOVT. SEC. SR. SCHOOL",
    subheading: "Addmission Form",
    year: " Session 2024-25",
    Data: [
        {
            id: "Name",
            type: "input",
            subType: "text",
            label: "Name:-",
            placeholder: "---Enter  Name---",
            name: "name"
        },
        {
            id: "FatherName",
            type: "input",
            subType: "text",
            label: "Father Name:-",
            placeholder: "---Enter  Father Name---",
            name: "FatherName"
        },
        {
            id: "MotherName",
            type: "input",
            subType: "text",
            label: "Mother Name:-",
            placeholder: "---Enter  Mother Name---",
            name: "MotherName"
        },
        {
            id: "Gender",
            type: "input",
            subType: "text",
            label: "Gender:-",
            placeholder: "---Enter Gender---",
            name: "Gender"
        },

        {
            id: "Date Of Birth",
            type: "input",
            subType: "date",
            label: "Date Of Birth:-",
            placeholder: "",
            name: "DateOfBirth"
        },
        {
            id: "Nationality",
            type: "input",
            subType: "text",
            label: "Nationality:-",
            placeholder: "---Enter Nationality---",
            name: "Nationality"
        },
        {
            id: "Email",
            type: "input",
            subType: "email",
            label: "Email:-",
            placeholder: "---Enter Email---",
            name: "email"
        },
        {
            id: "Mobile",
            type: "input",
            subType: "tel",
            label: "Mobile:-",
            placeholder: "---Enter Mobile---",
            name: "mobile"
        },
        {
            id: "Qualification",
            type: "input",
            subType: "text",
            label: "Qualification:-",
            placeholder: "---Enter Qualification---",
            name: "Qualification"
        },
        {
            id: "Residence",
            type: "input",
            subType: "textArea",
            label: "Residence:-",
            placeholder: "---Enter Residence---",
            name: "Residence"
        },
        {
            id: "Class in which addmission sought",
            type: "input",
            subType: "text",
            label: "Class In Which Addmission Sought:-",
            placeholder: "",
            name: "clasIWhichAddmissionSought"
        },
    ]
}


const AddmissionForm = () => {
    const [formObj, setFormObj] = React.useState(null)
    const [tableData, setTableData] = React.useState([])
    const _handelChange = (e) => {
        const { name, value } = e.target
        setFormObj((previous) => ({
            ...previous, [name]: value
        }))
    }
    console.log(formObj);
    console.log(tableData);

    const _submitData = () => {
        if (!!formObj?.name && !!formObj?.FatherName && !!formObj?.MotherName && !!formObj?.Gender && !!formObj?.DateOfBirth && !!formObj?.Nationality && !!formObj?.email && !!formObj?.mobile && !!formObj?.Qualification && !!formObj?.Residence && !!formObj?.clasIWhichAddmissionSought) {
            setTableData((previous) => [...previous, formObj]);
            setFormObj(null);
        } else {
            alert("Please fill all the fields");
        }
    }
    const _resetForm = (e) => {
        e.preventDefault();
        setFormObj(null);
    }

    return (
        <div className="Main_container">
            <div className='Form_container'>
                <div className="Form">
                    <div className='Name_container'>
                        <h1>{Addmissionformdata.heading}</h1>
                        <h2>{Addmissionformdata.subheading}</h2>
                        <h3>{Addmissionformdata.year}</h3>
                    </div>
                  <FormFeild formArr={Addmissionformdata.Data} onChangecb={_handelChange} formObj={formObj}/>
                   
                </div>
                <div className="BtnContainer">
                        <button className="Btn" onClick={_submitData}>Submit</button>
                        <button className='Btn' onClick={_resetForm}>Reset</button>
                    </div>
            </div>
            <hr></hr>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Nationality</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Qualification</th>
                        <th>Residence</th>
                        <th>Class In Which Sought</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((el, idx) => {
                        return (

                            <tr>
                                <td>{++idx}</td>
                                <td>{el?.name}</td>
                                <td>{el?.FatherName}</td>
                                <td>{el?.MotherName}</td>
                                <td>{el?.Gender}</td>
                                <td>{el?.DateOfBirth}</td>
                                <td>{el?.Nationality}</td>
                                <td>{el?.email}</td>
                                <td>{el?.mobile}</td>
                                <td>{el?.Qualification}</td>
                                <td>{el?.Residence}</td>
                                <td>{el?.clasIWhichAddmissionSought}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AddmissionForm;