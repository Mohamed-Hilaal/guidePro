import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Http from '../Http/HttpClient'



const Home = () => {

    const [userEmail, setUserEmail] = useState('')

    useEffect(()=>{

        const requestInitialData =  () => {
            Http.getData('places', {
                name : "Hilaal",
                work : 'Hunting'
            }).then((res) => {
                console.log("Response of places : ", res)
            }
            ).catch((err) => {
                console.log("Error appeared while fetching : ", err)
            }
            ).finally(()=>{
                console.log("Job Hunting Done")
            }
            )
        }
    
        requestInitialData()
    
    }, [])


    const handleUserCreation = async () => {
        await Http.postData('places/createUser', { userEmail }).then((res) => {
            console.log("User Record Created")
        }
        ).catch((err) => {
            console.log("Error appeared while fetching : ", err)
        }
        ).finally(()=>{
            console.log("User Creation done")
        }
        )
    }

    const handleEmailChange = (e) =>{
        setUserEmail(e.target.value)
    }

    return (
    <div className='home-container'>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={handleEmailChange}/>
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>

        <Button onClick={handleUserCreation}> Create User </Button>
    </div>

    )
}

export default Home