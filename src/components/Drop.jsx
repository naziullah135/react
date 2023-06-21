import React, { useMemo } from 'react';

const Drop = ({mousePos, icon}) => {
    const mpos = useMemo(()=> mousePos, []);
    return (
        <div className="absolute" style={{ left: `${mpos.x-10}px`, top: `${mpos.y-10}px` }}>{icon}</div>
    );
};

export default Drop;