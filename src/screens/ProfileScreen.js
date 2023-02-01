import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser} from "../features/counter/userSlice"
import { auth } from '../firebase'
import Nav from '../Nav'
import "./ProfileScreen.css"
import PlansScreen from './PlansScreen'



function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
        <div className='profileScreen__body'>
            <div className='profileScreen__info'>
             <img
                src='https://cdn-icons-png.flaticon.com/512/7153/7153150.png' alt='avatar' />
                <div className='profileScreen__details'>
                  <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                    <h3>Plans</h3>

                    <PlansScreen/>
                    <button onClick={()=> auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen