import React, {useState, useEffect} from 'react'
import './Answer.css'

const Answer = ({que_id, group_id, user_id}) => {

    const [ans, setAns] = useState([]);
    const [isAns, setIsAns] = useState(false);

        const fetchQuestions = () => {
                 fetch('http://localhost:3000/getanswer', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: que_id
            })
        })
                .then(response => response.json())
                .then((answer) => {
                    setAns(answer)
                }
                )
            
        }

        useEffect(() => {
            fetchQuestions()
           console.log(ans)
        }, [])



    return (
        <div>
                   {
                       ans.map((answer) => {
                           console.log(answer, 'dekhle bhai')
                        
                                const {ans_id, group_id, ans_content} = answer;
                                return (
                                   <div className="answerBox">
                {/*  <p className="userName2">UserName</p>*/}
                  <p>{ans_content}</p>
                  </div>
                                )
                        
                           
                       })
                   }
                   {/** 
                  <div className="answerBox">
                  <p className="userName2">UserName</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus nec enim semper luctus. Etiam accumsan, ipsum et laoreet ultricies, mauris dolor dignissim justo, non condimentum augue erat vitae ipsum. Suspendisse consectetur gravida nisi ut semper. Suspendisse consequat eros felis, eget aliquet ligula auctor vel. Integer dolor risus, rutrum auctor efficitur ut, suscipit vel lorem. Cras vestibulum neque nec lacinia mollis. Vestibulum molestie tortor euismod vulputate mollis. Quisque mi lacus, dignissim ut leo quis, tempor eleifend eros. Morbi at eleifend libero, facilisis pharetra turpis. Nunc venenatis, risus eu pellentesque posuere, nisi est maximus velit, at aliquet tellus tortor non velit.</p>
                  </div>
                  <div className="answerBox">
                   <p className="userName2">UserName</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus nec enim semper luctus. Etiam accumsan, ipsum et laoreet ultricies, mauris dolor dignissim justo, non condimentum augue erat vitae ipsum. Suspendisse consectetur gravida nisi ut semper. Suspendisse consequat eros felis, eget aliquet ligula auctor vel. Integer dolor risus, rutrum auctor efficitur ut, suscipit vel lorem. Cras vestibulum neque nec lacinia mollis. Vestibulum molestie tortor euismod vulputate mollis. Quisque mi lacus, dignissim ut leo quis, tempor eleifend eros. Morbi at eleifend libero, facilisis pharetra turpis. Nunc venenatis, risus eu pellentesque posuere, nisi est maximus velit, at aliquet tellus tortor non velit.</p>
                  </div>
*/}


        </div>
    )
}

export default Answer
