import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './LoadingShadow.css';

const SkeletonShadow = () => {
    return (
        <div className="skeleton-container">
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
            <Skeleton className="skeleton-item" variant='rectangular' animation="pulse" />
        </div>
    )
}

export default SkeletonShadow;