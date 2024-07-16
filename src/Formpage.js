import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Radio } from 'antd'
import { connect } from 'react-redux'
import { addData } from './Action'
import { useParams } from 'react-router-dom'
function FormPage(props) {
    const [index, setIndex] = useState(null)
    const [data, setData] = useState({ firstName: '', lastName: '', city: '', gender: '', hobby: '' })
    const [userlist, setUserList] = useState([]);
    const [error, setError] = useState({})
    const params = useParams();
    useEffect(() => {
        setUserList(props.data1)
        let id = params.id;
        if (id) {
            setData(props.edit)
        }
        setIndex(id);
    }, [])
    // handle change
    const HandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const validation = (name, value) => {
        switch (name) {
            case 'firstName':
                if (!value) {
                    return "Enter your first name";
                }
                else {
                    return ""
                }
            case 'lastName':
                if (!value) {
                    return "Enter your last name";
                }
                else {
                    return ""
                }
            case 'city':
                if (!value) {
                    return "Enter your city";
                }
                else {
                    return ""
                }
            case 'gender':
                if (!value) {
                    return "Select your gender";
                }
                else {
                    return ""
                }
            case 'hobby':
                if (!value) {
                    return "Select your hobby";
                }
                else {
                    return ""
                }
            default:
                return "";
        }
    }
    //handle submit
    const Submit = () => {
        //validation error
        var errors = {}
        var obj = data;
        Object.keys(obj).forEach(element => {
            let err = validation(element, obj[element]);
            if (err.length > 0) {
                errors[element] = err;
            }
        })
        if (Object.keys(errors).length > 0) {
            setError(errors)
            return
        }
        else {
            setError({})
        }


        var NewData = props.data1
        if (index) {
            NewData[index] = data
            setUserList([...NewData])
        }
        else {
            userlist.push({ ...data })
            setUserList([...userlist])
            console.log('userlist', userlist)
        }
        props.AddData(userlist)
        setData({ firstName: '', lastName: '', city: '', gender: '', hobby: '' });
        setIndex(null);

    }

    //checkbox
    const handleCheck = (e) => {
        var checkedvalue = data.hobby || []
        if (e.target.checked) {
            checkedvalue.push(e.target.value);
        } else {
            checkedvalue.splice(checkedvalue.indexOf(e.target.value), 1)
        }
        setData({ ...data, hobby: [...checkedvalue] })

    }

    return (
        <>
            <div>
                <h1>Form</h1>
                <div className='my-3'>
                    <input type="text" name='firstName' value={data.firstName} placeholder='Enter FirstName' onChange={(e) => HandleChange(e)} />
                    <span style={{ color: 'red' }}>{error.firstName}</span>
                </div>
                <div className='my-3'>
                    <input type="text" name='lastName' value={data.lastName} placeholder='Enter LastName' onChange={(e) => HandleChange(e)} />
                    <span style={{ color: 'red' }}>{error.lastName}</span>
                </div>
                <div className='my-3'>
                    <select name='city' value={data.city} onChange={(e) => HandleChange(e)}>
                        <option value=''>Select Your City...</option>
                        <option>Surat</option>
                        <option>Bhavnagar</option>
                        <option>Rajkot</option>
                        <option>Amreli</option>
                        <option>Ahmadabad</option>
                    </select>
                    <span style={{ color: 'red' }}>{error.city}</span>
                </div>
                <div className='my-3'>
                    <Radio.Group value={data.gender} name="gender" onChange={(e) => HandleChange(e)} >
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                        <Radio value="Other">Other</Radio>
                    </Radio.Group>
                    <span style={{ color: 'red' }}>{error.gender}</span>
                </div>
                <div className='my-3'>
                    <input type='checkbox' name='hobby' value='Learning' onChange={(e) => handleCheck(e)} checked={data?.hobby?.includes('Learning')} />Learning&nbsp; &nbsp;
                    <input type='checkbox' name='hobby' value='Reading' onChange={(e) => handleCheck(e)} checked={data?.hobby?.includes('Reading')} />Reading&nbsp; &nbsp;
                    <input type='checkbox' name='hobby' value='Writing' onChange={(e) => handleCheck(e)} checked={data?.hobby?.includes('Writing')} />Writing
                    <span style={{ color: 'red' }}>{error.hobby}</span>
                </div>
                <div className='my-3'>
                    <Button variant='primary' onClick={() => Submit()}>Submit</Button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        data1: state.user,
        edit: state.editData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddData: (event) => dispatch(addData(event))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormPage);