import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import { Tweet } from '../../store/types/tweets';
import UserInfo from './UserInfo';

function Header({ fullname, username }: Tweet['user']) {
    return (
        <header className="tweet__header">
            <UserInfo name={fullname} nickname={username} />
            <IconButton size="small">
                <SvgIcon fontSize="inherit">
                    <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                </SvgIcon>
            </IconButton>
        </header>
    );
}

export default Header;
