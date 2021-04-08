import { useEffect, useState } from 'react'
import { saveToLocal } from '../lib/saveToLocal'
import { loadFromLocal } from '../lib/loadFromLocal'

export const useLocalStorage = (key, defaultValue) => {
    const initialValue = loadFromLocal(key) ?? defaultValue;

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        saveToLocal(key, value);
    }, [key, value]);

    return [value, setValue];

}; 