// hooks/useLogoWithMenuLogic.ts
import { useState, useEffect } from 'react';
import useLogoutLogic from '@hooks/useLogoutLogic';
import { NavigationProp } from '@react-navigation/native';

const useLogoWithMenuLogic = (navigation: NavigationProp<any>) => {
    
    const [selectedBranch, setSelectedBranch] = useState<string>('Sucursal Roma');
    const { handleLogout, loading: logoutLoading, error: logoutError } = useLogoutLogic(navigation);

    useEffect(() => {
        
    }, []);

    useEffect(() => {
        
    }, [selectedBranch]);

    return {
        selectedBranch,
        setSelectedBranch,
        handleLogout,
        logoutLoading,
        logoutError,
    };
};

export default useLogoWithMenuLogic;
