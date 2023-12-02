import { createContext } from "react";
import  { TODOContext } from "./ToDo1";


const todosContext = createContext<TODOContext | null>(null)

export default todosContext;