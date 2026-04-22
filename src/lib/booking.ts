export const BOOKING_URL =
  "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D";

export const BOOKING_EVENT = "open-booking";

export const openBookingDialog = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BOOKING_EVENT));
  }
};
