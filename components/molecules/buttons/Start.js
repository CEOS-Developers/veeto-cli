import React from 'react';
import Link from 'next/link'
import Start from '../../atoms/buttons/texts/start';

const start = () => {
    return(
        <Link href='/main'><a style={{textDecoration:'none'}}>
            <Start></Start>
        </a></Link>
    );
}

export default start;