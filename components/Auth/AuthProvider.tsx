import Preloader from '@components/Layout/Preloader';
import AuthStore from '@stores/AuthStore';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface LayoutProps {
    children: React.ReactNode;
    protectedRoute: boolean
}

const AuthProvider = ({ children, protectedRoute }: LayoutProps) => {
    const [showUi, setShowUi] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if(!protectedRoute) setTimeout(() => setShowUi(true), 1500);
        if(protectedRoute && AuthStore.isLoggedIn) setTimeout(() => setShowUi(true), 1500);
        if(!AuthStore.isFetching && !AuthStore.isLoggedIn) AuthStore.setRedirectPath('/auth/login');
    }, [router, protectedRoute])

    return (
        <React.Fragment>
            {showUi ? children : <Preloader />}
        </React.Fragment>
    );
}

export default observer(AuthProvider)