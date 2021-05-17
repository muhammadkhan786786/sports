import React from 'react';
import renderer from 'react-test-renderer';
import PopularEventItemView from './PopularEventItemView';

const data = {
  bet_allowed: true,
  bettable: true,
  chart_time_period: null,
  created: '2021-05-10T00:34:50.887745Z',
  description: null,
  display_order: 0,
  end_date: null,
  full_slug:
    '/sport/football/germany-bundesliga/2021/05/16/18-30/rb-leipzig-vs-vfl-wolfsburg',
  hidden: false,
  id: '42207308',
  inplay_enabled: true,
  modified: '2021-05-16T20:23:44.059361Z',
  name: 'RB Leipzig vs VfL Wolfsburg',
  parent_id: '30088540',
  seo_description: null,
  short_name: 'RBL vs. VFL',
  slug: 'rb-leipzig-vs-vfl-wolfsburg',
  special_rules: null,
  start_date: '2021-05-16',
  start_datetime: '2021-05-16T18:30:00Z',
  state: 'ended',
  type: 'football_match',
};

describe('PopularEventItemView component', () => {
  test('PopularEventItemView should renders all the views if item prop is given', () => {
    const tree = renderer.create(<PopularEventItemView item={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
