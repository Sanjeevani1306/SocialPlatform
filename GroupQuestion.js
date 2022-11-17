import React, {useState, useEffect} from 'react'
import './GroupQuestion.css'
import Answer from './Answer'

const GroupQuestion = ({grpId}) => {
     const [que, setQue] = useState([]);

        const fetchQuestions = () => {
                 fetch('http://localhost:3000/groupquestions', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: grpId
            })
        })
                .then(response => response.json())
                .then((question) => {
                    setQue(question)
                    console.log(question)
                }
                )
            
        }

        useEffect(() => {
            fetchQuestions()
        }, [])

    return (
        <div className="question2">
            {
                que.map((question) => {
                    const {que_id, group_id, user_id, que_content} = question;
                    return (
                        <div className="question_box2">
                        <p className="userName">User Name </p>
            <div className="add_question__tagline">
                <p className="question__name">{que_content}</p>
            </div>
                <Answer que_id={que_id} group_id={group_id} user_id={user_id} />
            </div>
                    )
                })
            }
            
        </div>
    )
}

export default GroupQuestion
