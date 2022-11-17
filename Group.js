import React, {useState} from 'react'
import './Group.css'
import GroupMember from './GroupMember'
import GroupQuestion from './GroupQuestion'

const Group = ({grpId, grpName, grpField, userId}) => {
     const [que, setQue] = useState('');
     const [isFollowing, setIsFollowing] = useState(true)
     const follow = 'Following';
     const unfollow = 'Follow'

     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(que)
         fetch('http://localhost:3000/ask_question', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               user_id: userId,
               group_id: grpId,
               que_id: 16,
               que_content: que
            })
        })
        .then(response => response.json())
        setQue('')
        }

        const followSubmit = (e) => {
            e.preventDefault();
            if (isFollowing) {
                 fetch('http://localhost:3000/unfollow', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               user_id: userId,
               group_id: grpId
            })
        })
        .then(response => response.json())
        setIsFollowing(false)
            }
            else {
                 fetch('http://localhost:3000/follow', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
               user_id: userId,
               group_id: grpId
            })
        })
        .then(response => response.json())
        setIsFollowing(true)
            }
        }

    return (
        <div>
        <div className="group2">
       
        <div className="header"
        style={
            {backgroundImage: `url(https://picsum.photos/id/${grpId}/1400/150)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}
        }>
             <h1 className="groupName3">{grpName}</h1>
             
        </div> 
        <div className="header2">
             <p className="groupField">{grpField}</p>  
             <button onClick={(e) => followSubmit(e)} className="followBtn">{
            isFollowing ? 
            (follow): (unfollow)
        }</button>
        </div>
         <div className="postQuestion">
             <h2 className="queInputTag"> Ask a Question Here </h2>
            <form onSubmit={handleSubmit}>
            <input
            className='inputQuestion'
              type='text'
              name='question'
              value={que}
              onChange={(e) => setQue(e.target.value)}
              placeholder='Enter your Question'
            />
             <button type='submit' className='submitQuestion'>Post Question</button>
            </form>
            
         </div>          
        
        </div>
        <div className="groupBottom">
            <GroupQuestion grpId={grpId} />
            <GroupMember grpId={grpId} />
        </div>
        

        

        
        </div>
        
    )
}

export default Group
