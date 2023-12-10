import React, {
  createContext,
  FC,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from "react";

type Action = { type: "UPDATE_WORKSPACE"; payload: Partial<ContextObjectType> };

type DispatchType = Dispatch<Action>;

type ContextObjectType = {
  zoom: number;
  mode: "dev" | "watch";
};

const initialState: ContextObjectType = {
  zoom: 75,
  mode: "watch",
};

const WorkspaceContext = createContext<
  { state: ContextObjectType; dispatch: DispatchType } | undefined
>(undefined);

const workspaceReducer = (
  state: ContextObjectType,
  action: Action
): ContextObjectType => {
  switch (action.type) {
    case "UPDATE_WORKSPACE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const WorkspaceProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(workspaceReducer, initialState);

  return (
    <WorkspaceContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = (): {
  state: ContextObjectType;
  dispatch: DispatchType;
} => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};
