import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import SvgIcon from '@material-ui/core/SvgIcon';

import './Account.scss';

function Account() {
    return (
        <div className="account__container">
            <button className="account">
                <Avatar
                    className="account__avatar"
                    src="https://pbs.twimg.com/profile_images/978676063608999937/2JuDAHxl_bigger.jpg"
                />
                <div className="account__body">
                    <div className="account__name">Серёжа Балейко</div>
                    <div className="account__nickname">@seryozhabaleyko</div>
                </div>
                <div className="account__icon">
                    <SvgIcon>
                        <g>
                            <path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path>
                        </g>
                    </SvgIcon>
                </div>
            </button>
        </div>
    );
}

export default Account;
