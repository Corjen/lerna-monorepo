import React from 'react';
import { Main } from '@sample/components';

export interface AppProps {
    text: string;
}

export const App: React.FunctionComponent<AppProps> = ({ text }) => {
    //12412
    return <Main text={text} />;
};
