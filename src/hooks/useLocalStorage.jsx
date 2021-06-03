import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }
    return [storedValue, setValue];
};