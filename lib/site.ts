export const APPLY_URL =
  process.env.NEXT_PUBLIC_APPLY_URL ??
  "https://docs.google.com/forms/d/e/1FAIpQLSf_cFFjEBsz8b4Ok4yFUMFbWUIowY4MLCNN4GVz5Vd2nhhlZg/viewform";

export const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Projects", href: "#projects" },
  { label: "Jeju Experience", href: "#experience" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
] as const;
