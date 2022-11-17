import React, {useState, useEffect} from 'react'

const GroupName = ({group_id}) => {
    const [groupName, setGroupName] = useState('')
     const fetchQuestions = () => {
                 fetch('http://localhost:3000/getgroupname', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: group_id
            })
        })
                .then(response => response.json())
                .then((name) => {
                    console.log(name)
                    setGroupName(name.group_name)
                    console.log(groupName, 'here')
                }
                )
            
        }
        useEffect(() => {
            fetchQuestions()
        }, [])
    return (
        <div>
            <p className="groupName">{groupName}</p>
        </div>
    )
}

export default GroupName
