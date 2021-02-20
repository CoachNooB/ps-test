import React from 'react';
import {
    Grid,
    Container,
} from '@material-ui/core';

import NavBar from '../Navigation/NavBar.component'
import ProfileCard from './ProfileCard'

const ProfilePage = ({ setIsLoggedIn, setUserData, userData }) => {
    return (
        <Container>
            <NavBar setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
            <Grid container direction='row' justify='center' alignItems='center'>
                <ProfileCard userData={userData} />
            </Grid>
        </Container>
    )
}

export default ProfilePage
