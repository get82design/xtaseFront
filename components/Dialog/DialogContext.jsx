import { createContext, useContext, useState } from "react";

export const DialogContext = createContext({})

export const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog doit etre dans DialogProvider')
  }
  return context
}

export const DialogProvider = (props) => {
    const [openDialog, setOpenDialog] = useState(false)
    const value = {openDialog, setOpenDialog}
    return <DialogContext.Provider value={value} {...props} />
}