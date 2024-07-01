import React, { ReactNode, createContext, useContext, useState } from "react";

type PaymentContext = {
  payment: Payment | null;
  handleSetPayment: (data: Payment) => void;
};

export const PaymentContext = createContext<PaymentContext | null>(null);

export const PaymentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [payment, setPayment] = useState<Payment | null>(null);

  const handleSetPayment = (data: Payment) => {
    setPayment(data);
  };

  return (
    <PaymentContext.Provider value={{ payment, handleSetPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error(
      "usePaymentContext must be used within a  ThemeContextProvider",
    );
  }

  return context;
};
