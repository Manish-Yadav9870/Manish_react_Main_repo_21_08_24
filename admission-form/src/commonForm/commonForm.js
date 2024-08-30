import React from "react"
const FormFeild =({formArr=[],onChangecb,formobj})=>{
    return(
        <div> {formArr.map(feild => {
            return (
                <div className="Child_container" key={feild.id}>
                    <div className='label_container'> <label className="Label">{feild.label}</label></div>
                    <div> <input className="Input" type={feild.subType} value={formObj?.[feild.name] ?? ""} placeholder={feild.placeholder} name={feild.name} onChange={onChangecb} /></div>

                </div>

            )
        })}
        </div>
    )
};
export default FormFeild;