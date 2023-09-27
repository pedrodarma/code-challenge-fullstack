"use client"; // This is a client component 👈🏽

import { createContext, ReactNode, useContext } from "react";
import DevelopmentError from "./errors/DevelopmentError";
import { AppProviderType } from "./app.provider.types";
import useWorkflowState from "./states/workflow.state";

export const AppContext = createContext<AppProviderType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new DevelopmentError("You are trying to useAppContext outside App Provider.");
  }

  return context;
}

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦   ╔═╗╔╦╗╔═╗╔╦╗╔═╗╔═╗
  //  ║║║║║ ║ ║╠═╣║   ╚═╗ ║ ╠═╣ ║ ║╣ ╚═╗
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝ ╚═╝ ╩ ╩ ╩ ╩ ╚═╝╚═╝
  const [workflowState, workflowActions] = useWorkflowState();

  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣ ╚═╗
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝╚═╝
  const AppStates = {
    workflowState,
  };

  //  ╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  const AppActions = {
    ...workflowActions,
  };

  return (
    <AppContext.Provider value={{ ...AppStates, ...AppActions }}>
      {children}
    </AppContext.Provider>
  );
}
