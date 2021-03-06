export interface SportEventTypes {
  id: string;
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string | null;
  description: string | null;
  display_order: number;
  end_date: string | null;
  full_slug: string;
  hidden: boolean;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string;
  seo_description: string | null;
  short_name: string;
  slug: string;
  special_rules: string | null;
  start_date: string;
  start_datetime: string;
  state: string;
  type: string;
}
