import { useCallback } from "react";
import { openBookingDialog } from "@/lib/booking";

export const useBooking = () => {
  const openBooking = useCallback(() => {
    openBookingDialog();
  }, []);
  return { openBooking };
};
