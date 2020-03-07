import React, { useContext } from 'react';
import {ProfileContext} from './ProfileContext'

const ProfilePage = () => {

    const {profile} = useContext(ProfileContext)

    return(
        <>

            {profile.map(e => {
                return(
                    <div className='sign'>

                        <div className='left'>

                            <h1> Sauti </h1>

                            <h2> Profile </h2>

                        </div>

                <div className='container'>

                <form className="right">
                <h1 className='create'> Profile </h1>
                    <label>Full Name </label>
                    <input 
                    type='text'
                    name='name'
                    value={e.name}
                    />

                    <label>Phone</label>
                    <input 
                    type='password'
                    name='password'
                    value={e.phone}
                    />

                    <label> Email </label>
                    <input 
                    type='text'
                    name='phone'
                    value={e.email}
                    />

                    <label>password</label>
                    <input 
                    type='email'
                    name='email'
                    value={e.password}
                    />

                    <label>Location</label>
                    <input 
                    type='text'
                    name='location'
                    value={e.location}
                    />

                    <button>Update</button>

                </form>
            </div>
            </div>

                )
            })}
        </>


    )   
}





export default ProfilePage