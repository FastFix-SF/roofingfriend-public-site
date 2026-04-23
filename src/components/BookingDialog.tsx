import { useEffect, useState } from "react";
import BookingModal from "@/components/BookingModal";
import { BOOKING_EVENT } from "@/lib/booking";

const BookingDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(BOOKING_EVENT, handler);
    return () => window.removeEventListener(BOOKING_EVENT, handler);
  }, []);

  return <BookingModal isOpen={open} onClose={() => setOpen(false)} />;
};

export default BookingDialog;
