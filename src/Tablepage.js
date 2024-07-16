import { Table } from 'antd';
import React from 'react'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteData, editData } from './Action';

function Tablepage(props) {
    const navigate = useNavigate();
    //delete data
    const DeleteData = (i) => {
        props.deleteUser(i);
    }
    //edit Data
    const EditData = (i) => {
        props.editUser(i);
        navigate(`/edit/${i}`);
    }
    const columns = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
        },
        {
            title: 'City',
            dataIndex: 'city',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
        },
        {
            title: 'Hobby',
            dataIndex: 'hobby',
        },
        {
            title: 'Action',
            dataIndex: '',

            render: (text, record, i) => (
                <div>
                    <Button variant='primary' onClick={() => EditData(i)}>Edit</Button>{" "}
                    <Button variant='danger' onClick={() => DeleteData(i)}>Delete</Button>
                </div>
            )
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={props.data} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        data: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (event) => dispatch(deleteData(event)),
        editUser: (event) => dispatch(editData(event))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tablepage);