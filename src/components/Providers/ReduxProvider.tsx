"use client"

import React from "react"
import { Provider } from 'react-redux';
import { persistor, store } from "@/Redux/store";
import { PersistGate } from 'redux-persist/integration/react';


const ReduxProvider = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider