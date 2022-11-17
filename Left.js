
import React, {useState, useEffect} from 'react'
import './Left.css';
import Group from './Group'
import Modal from 'react-modal'
import { black } from 'material-ui/styles/colors';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, pink } from '@material-ui/core/colors';
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));



Modal.setAppElement('#root')

function Left({userId}) {

    const [groups, setGroups] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [grpName, setGrpName] = useState('')
    const [grpId, setGrpId] = useState(1)
    const [grpField, setGrpField] = useState('')


    const fetchGroups =  () => {
         fetch('http://localhost:3000/followinggroups', {
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
    }, [])


    const handleSubmit = (groupId, groupName, groupField) => {
        setGrpName(groupName)
        setGrpId(groupId)
        setGrpField(groupField)
        setIsModalOpen(!isModalOpen)

    }

  const classes = useStyles();
    return (
        <>
        <div className="left_widget">
            {
                groups.map((group) => {
                    const {group_id, group_name, group_field} = group;
                    return (
                        <div className="group" >
                            <div className="group_logo">
                                <Avatar className={classes.pink} alt={group_name} src={`https://picsum.photos/id/${group_id}/200/300`}/>
                            </div>
                            <div className="group_name">
                                 <p>{group_name}</p>
                            </div>
                            <button onClick={() => handleSubmit(group_id, group_name, group_field)} className="grpBtn"><CallMadeIcon  className="icon"/></button>
                        </div>
                    )
                })
              
            }
               {/*
                                isModalOpen && (
                                   <Group grpName={grpName} grpId={grpId} grpField={grpField} />
                                )
                            */}                 
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
                     <Group grpName={grpName} grpId={grpId} grpField={grpField} userId={userId}/>
                </div>
                    
                </Modal>
        </>
    )
}

export default Left
