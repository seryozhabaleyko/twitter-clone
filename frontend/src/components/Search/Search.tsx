import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

import './Search.scss';

function Search() {
    return (
        <Input
            size="large"
            placeholder="Поиск в Твиттере"
            prefix={<SearchOutlined className="search-icon" />}
            className="search"
        />
    );
}

export default Search;
