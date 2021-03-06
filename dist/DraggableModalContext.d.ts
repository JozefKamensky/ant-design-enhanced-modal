import * as React from 'react';
import { Action, ModalsState } from './draggableModalReducer';
export interface DraggableModalContextMethods {
    dispatch: (action: Action) => void;
}
export interface DraggableModalContextValue extends DraggableModalContextMethods {
    state: ModalsState;
}
export declare const DraggableModalContext: React.Context<DraggableModalContextValue | null>;
