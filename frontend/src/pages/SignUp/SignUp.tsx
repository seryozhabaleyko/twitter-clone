import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

import './SignUp.scss';

function SignUp() {
    useDocumentTitle('Зарегистрироваться в Твиттере / Твиттер');

    return (
        <main className="main">
            <div>SignUp</div>
        </main>
    );
}

export default SignUp;
