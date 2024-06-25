import React, { useEffect } from 'react';

const StripeBuyButton = ({ buttonId, publishableKey }) => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id={buttonId}
      publishable-key={publishableKey}
    />
  );
};
export default StripeBuyButton;