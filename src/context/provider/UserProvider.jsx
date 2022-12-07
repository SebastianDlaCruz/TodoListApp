import { useState } from "react";
import { UserContext } from "../userContext";

export const UserProvider = ({ children }) => {

    const [themeGeneral, setTheme] = useState(false);
    const [counterTask, setCounterTask] = useState(0);

    const handleTheme = () => {
        setTheme(!themeGeneral);
    }

    const handleIncreaseCounter = () => {
        setCounterTask(counterTask + 1);
    }

    const handleDecrementCounter = (check) => {

        if (!check) {
            setCounterTask(counterTask - 1);
        }
    }

    const handleDecrementCheck = (check) => {

        if (!check) {
            setCounterTask(counterTask + 1);
        } else {
            setCounterTask(counterTask - 1);
        }

    }

    return (

        <UserContext.Provider value={{
            themeGeneral,
            handleTheme,
            counterTask,
            handleIncreaseCounter,
            handleDecrementCounter,
            handleDecrementCheck
        }}>
            {children}
        </UserContext.Provider>
    );
}