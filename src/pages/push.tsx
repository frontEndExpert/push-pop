import React from 'react';
import PushOrderedList from '@/components/PushOrderedList';
import App from '../components/App';

export default function Push() {
    return (
        <App title="PushOrderedList pop with O(n) Push O(1)."
            description="PopOrderedList pop with O(n) Push O(1).">
            <PushOrderedList />
        </App>
    )
}