import React, {useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core'
import './Right.css'
import CallMadeIcon from '@material-ui/icons/CallMade';
import Modal from 'react-modal'
import UnfllowGroup from './UnfllowGroup'

/*
const groups = [
    {
        name: 'group_name',
        text: '300 Followers'
    },
    {
        name: 'group_name2',
        text: '350 Followers'
    }
]*/
Modal.setAppElement('#root')


function Right({userId}) {

    const [groups, setGroups] = useState([])
     const [isModalOpen, setIsModalOpen] = useState(false);
    const [grpName, setGrpName] = useState('')
    const [grpId, setGrpId] = useState(1)
    const [grpField, setGrpField] = useState('')

    const fetchGroups =  () => {
         fetch('http://localhost:3000/groupstofollow', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: userId
            })
        })
        .then(response =>  response.json())
        
           .then(groups => {
                setGroups(groups)
            })
        
    }

    useEffect(() => {
        fetchGroups();
       console.log(groups)
    }, [])

     const handleSubmit = (groupId, groupName, groupField) => {
        setGrpName(groupName)
        setGrpId(groupId)
        setGrpField(groupField)
        setIsModalOpen(!isModalOpen)

    }

    return (
        <>
         <div className="right_widget">
            {
                groups.map((group) => {
                    const {group_name, group_id, group_field} = group;
                    console.log('grouP-id', group_id)
                    return (
                        <div className="group">
                            <div className="group_logo">
                                <Avatar  alt={group_name} src={`https://picsum.photos/id/${group_id}/200/300`}/>
                            </div>
                            <div className="group_name">
                                 <p>{group_name}</p>
                            
                            </div>
                            <button onClick={() => handleSubmit(group_id, group_name, group_field)} className="grpBtn"><CallMadeIcon  className="icon"/></button>
                        </div>
                    )
                })
            }
        </div>

       <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}
                style={
                    {
                        overlay: {
                            background: 'rgb(138,98,156)',
                            background: 'linear-gradient(90deg, rgba(138,98,156,1) 0%, rgba(33,20,32,1) 0%, rgba(159,49,146,1) 69%)'
                        },
                        content: {
                            color: 'black'
                        }
                    }
                }
                >
                <div >
                     <UnfllowGroup grpName={grpName} grpId={grpId} grpField={grpField} userId={userId}/>
                </div>
                
                </Modal>     
</>
    )
}

export default Right
