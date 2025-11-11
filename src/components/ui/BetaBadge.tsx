import React from "react";

const BetaBadge: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-9999 shadow-lg pointer-events-none" aria-hidden="true">
      Beta Version
    </div>
  );
};

export default BetaBadge;
