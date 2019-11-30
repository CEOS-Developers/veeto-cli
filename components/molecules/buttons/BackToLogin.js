import React, { useState, Component } from 'react';
import Link from 'next/link'
import BackToLogin from '../../atoms/buttons/icons+text/backToLogin';
import { useRouter } from 'next/router'

const enter = () => {

    const router = useRouter();
    const { date } = router.query;

    return(
        <Link href={{ pathname: 'roomsByDate', query: { date: `${date}` }}}>
            <a style={{textDecoration:'none'}}>
            <BackToLogin></BackToLogin>
        </a></Link>
    );
}

export default enter;