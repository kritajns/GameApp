import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

type RootStackList = {
    TabRoutes: any;
};

export const navigationRef = createNavigationContainerRef<RootStackList>();

export function navigate(name: keyof RootStackList, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

export function goBack() {
    navigationRef.current?.goBack();
}
