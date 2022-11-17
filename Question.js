import React, {useState, useEffect }from 'react'
import { Avatar } from '@material-ui/core'
import './Question.css'
import Answer from './Answer'
import Modal from 'react-modal'
import GiveAns from './GiveAns'
import { makeStyles } from '@material-ui/core/styles';
import GroupName from './GroupName'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4.8),
    height: theme.spacing(4.8),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

Modal.setAppElement('#root')

function Question({userId}) {
        console.log(userId)
        const [que, setQue] = useState([]);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [giveAns, setGiveAns] = useState(false)
        const [groupId, setGroupId] = useState(0)
        const [queUserId, setQuestionUserId] = useState(0)
        const [ans, setAns] = useState('')
        const fetchQuestions = () => {
                 fetch('http://localhost:3000/getques', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: userId
            })
        })
                .then(response => response.json())
                .then((question) => {
                    setQue(question)
                    console.log(question)
                }
                )
            
        }

        const handleSubmit = (e,questionId, userid) => {
            e.preventDefault();
            console.log(questionId)
            console.log(userid)
            fetch('http://localhost:3000/answer', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ans_id: 10,
                que_id: questionId,
               user_id: userid,
               ans_content: ans
            })
        })
        .then(response => response.json())
        setAns('')
        }

        useEffect(() => {
            fetchQuestions()
        }, [])
        const classes = useStyles();

    return (
        <div className="question">
        
            {
                que.map((question) => {
                    const {que_id, group_id, user_id, que_content} = question;
                    return (
                        <div className="question_box">
                        <div className="question_header">
                            <Avatar alt="Group Name" src={`https://picsum.photos/id/${group_id}/200/300`} className={classes.small}/>
                            <div>
                                <GroupName className="groupName" group_id={group_id}/>
                          {    /*  <p className="userName">User Name </p> */}
                            </div>
                             <button onClick={() => setGiveAns(!giveAns)} className="giveAns">Answer</button>
                        </div>
            <div>    
                <p className="question__name">{que_content}</p>
            </div>
            {
                giveAns && <div>
                     <div className="postAnswer">
             <h2 className="queInputTag"> Post Answer to this Question </h2>
            <form className="answerForm">
            <input
            className='inputAnswer'
              type='text'
              name='question'
              value={ans}
              onChange={(e) => setAns(e.target.value)}
              placeholder='Enter your Answer'
            />
             <button  className='submitAnswer' onClick={(e) => handleSubmit(e,que_id, user_id)}>Post Question</button>
            </form>
            
         </div>
                </div>
            }
                <Answer que_id={que_id} group_id={group_id} user_id={user_id} />
            </div>
                    )
                })
            }
           
        </div>
    )
}

export default Question
