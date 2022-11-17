import React, {useState, useEffect} from 'react'
import './GroupMember.css'

const GroupMember = ({grpId}) => {
    const [members, setMembers] = useState([])


    const fetchGroups =  () => {
         fetch('http://localhost:3000/groupdetails', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: grpId
            })
        })
        .then(response =>  response.json())
        
           .then(users => {
                setMembers(users)
            })
        
    }

    useEffect(() => {
        fetchGroups();
        console.log('groupmembers', grpId)
        console.log(members)
    }, [])


    return (
        <div className="groupMembers">
        <p className="groupMembersTagline">Group Members : </p>
             {
                members.map((user) => {
                    const {id, fname, lname, designation} = user;
                    return (
                        <div className="user" >
                            <div className="userDisplay">
                            <div className="userName">
                                 <p className="fname">{fname}</p>
                                 <p className="lname">{lname}</p>
                            </div>
                                 <p className="designation">{designation}</p>
                            </div>
                            
                        </div>
                    )
                })
              
            }
        </div>
    )
}

export default GroupMember
