interface NavKey {
  label: string;
  url: string;
  icon?: string;
  active?: boolean;
}
interface ContactKey {
  label: string;
  link: string;
  color?: string;
  icon?: string;
}

export type { NavKey, ContactKey };
