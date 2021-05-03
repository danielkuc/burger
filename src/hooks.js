import { useEffect } from 'react';
  // passing ref to a DOM node and a handler (function setting state to open || !open)
export const useOnClickOutside = (ref, handler) => {
  // useEffect invoked if ref or handler change
  useEffect(() => {
    // event passed to listener function, performs a check if clicked element is a current element (Menu) or if it contains current element(div wrapper). If checks pass -> return, else call passed handler function.
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    // add event listener to element.
    document.addEventListener('mousedown', listener);
    // cleanup - removes event listener.
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};