import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export const Tooltip = ({ children, content }) => {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
  });

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      ref={setReferenceElement}
      className="inline-block"
    >
      {children}
      {show && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-black text-white text-sm py-2 px-4 rounded-md shadow-lg z-10 max-w-xs ml-4"
        >
          <div className="break-words">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
