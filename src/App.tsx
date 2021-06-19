import React from 'react';
import './App.css';
import Main from './components/main'
import Video from './components/Video'
import './styling/style.css'

// const boldStyle = { root: { fontWeight: FontWeights.semibold } };
// const stackTokens: IStackTokens = { childrenGap: 15 };

export const App: React.FunctionComponent = () => {
  return (
    
      <div>
      <Main />
      
      <Video />
      </div>
    
  );
};
