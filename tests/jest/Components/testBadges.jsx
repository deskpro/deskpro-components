import React from 'react';
import renderer from 'react-test-renderer';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Icon } from '../../../src/Components/index';
import { CircleBadge, DateBadge, IconBadge, TextBadge } from '../../../src/Components/Badges/index';

describe('>>> Badges --- Snapshot', () => {
  it('+++capturing Snapshot of CircleBadge', () => {
    const renderedValue = renderer.create(<CircleBadge type="warning" max={10}>100</CircleBadge>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of DateBadge', () => {
    const renderedValue = renderer.create(<DateBadge month="Mar" day="12" pill />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of IconBadge', () => {
    const renderedValue = renderer.create(<IconBadge icon={<Icon name={faEnvelope} size="large" />} type="info">
        12
    </IconBadge>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
  it('+++capturing Snapshot of TextBadge', () => {
    const renderedValue = renderer.create(<TextBadge type="success">Super looooong text</TextBadge>).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
