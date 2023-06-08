import React from 'react';
import PopOrderedList from '@/components/PopOrderedList';
import App from '../components/App';

export default function Pop() {
    return (
        <App title="PopOrderedList pop with O(1) Push O(n)."
            description="PopOrderedList pop with O(1) Push O(n).">
            <PopOrderedList />
        </App>
    )
}