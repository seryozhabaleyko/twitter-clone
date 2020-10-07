import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { User as UserProps } from '../../state/modules/recommended/recommended.types';
import Follow from './Follow';

import './User.scss';

function User({ name, nickname, avatarUrl }: UserProps) {
    return (
        <div role="button" className="recommended-user recommended-hover-effect">
            <div className="recommended-user__avatar">
                <Avatar src={avatarUrl} style={{ width: 49, height: 49 }} />
            </div>
            <div className="recommended-user__body">
                <div className="recommended-user__user-info">
                    <div className="recommended-user__name">{name}</div>
                    <div className="recommended-user__nickname">@{nickname}</div>
                </div>
                <div className="recommended-user__action-button">
                    <Follow />
                </div>
            </div>
        </div>
    );
}

export default User;
