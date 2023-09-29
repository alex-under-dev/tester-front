import React from 'react'
import { useStore } from 'effector-react';

import { replaceNavigate } from '@/features/app/model';
import { $isUserAuthorized } from '@/features/login/model';
type Props = {
    isPrivate: boolean;
    children: React.ReactNode;
}

export const RoutesGuard: React.FC<Props> = ({ isPrivate, children }) => {
    const isUserAuthorized = useStore($isUserAuthorized)
    React.useEffect(() => {
        !isUserAuthorized && isPrivate && replaceNavigate('/')
        isUserAuthorized && !isPrivate && replaceNavigate('/tests')
    }, [isPrivate, isUserAuthorized])
    return (
        <>{children}</>
    )
}