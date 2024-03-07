import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Home = () => {
    return (
    <div className='home-container'>
        <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
    </div>

    )
}

export default Home