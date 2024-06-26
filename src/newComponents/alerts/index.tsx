import React, { useState, useEffect } from "react";

interface AlertPopupProps {
  color: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

const AlertPopup: React.FC<AlertPopupProps> = ({
  color,
  message,
  duration,
  onClose,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) {
          onClose(); // Call onClose callback if provided
        }
      }, duration || 3000); // Use the specified duration or default to 3000ms

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  return (
    <div className={`alert-popup ${color} ${visible ? "visible" : ""}`}>
      {message}
    </div>
  );
};

export default AlertPopup;
