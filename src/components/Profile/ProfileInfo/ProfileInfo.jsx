import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://base.imgix.net/files/base/ebm/industryweek/image/2020/10/silicon_valley.5f9b725963ec8.png?auto=format&fit=crop&h=432&w=768'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;