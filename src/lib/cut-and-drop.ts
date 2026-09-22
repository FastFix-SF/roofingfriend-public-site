export const CUT_AND_DROP_EVENT = "open-cut-and-drop";

export const openCutAndDropDialog = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CUT_AND_DROP_EVENT));
  }
};
