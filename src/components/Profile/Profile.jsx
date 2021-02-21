import React from 'react';
import s from './Profile.module.css';

const Profile = () => {

    return (
        <div className={s.profile}>
        <div className={s.profileImage}>
          <img src="https://base.imgix.net/files/base/ebm/industryweek/image/2020/10/silicon_valley.5f9b725963ec8.png?auto=format&fit=crop&h=432&w=768"></img>
        </div>
        <div className={s.profilePhoto}>
          <img src='https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=85&auto=format&fit=max&s=21718fb1379918410ea10054db89f665'></img>
        </div>
        </div>)
    }

export default Profile;

