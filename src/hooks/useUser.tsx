import { useState } from "react";
import { TUser  } from "../types/user"; "../types/user"

export default function useUser() {

  const [currentUser, setCurrentUser] = useState<TUser>(
    localStorage.getItem('current-user')
      ? JSON.parse(localStorage.getItem('current-user')!)
      : null
  );

  function handleInsertUser(user: TUser) {
    localStorage.setItem('current-user', JSON.stringify(user));
    setCurrentUser(user);
  }

  return {
    handleInsertUser,
    currentUser
  }
}
