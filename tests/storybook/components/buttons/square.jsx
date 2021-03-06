import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../../../src/Components/Buttons';
import Icon from '../../../../src/Components/Icon';
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

storiesOf('Buttons', module)
  .add('with shape square', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button shape="square" type="primary" size="small">
          <Icon name={faPlus} />
        </Button>&nbsp;
        <Button shape="square" type="primary" size="medium">
          <Icon name={faPlus} />
        </Button>&nbsp;
        <Button shape="square" type="primary" size="large">
          <Icon name={faPlus} />
        </Button>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Button shape="square" type="secondary" size="small">
          <Icon name={faSearch} />
        </Button>&nbsp;
        <Button shape="square" type="secondary" size="medium">
          <Icon name={faSearch} />
        </Button>&nbsp;
        <Button shape="square" type="secondary" size="large">
          <Icon name={faSearch} />
        </Button>
      </div>
      <div>
        <Button shape="square" type="cta" size="small">
          <Icon name={faSearch} />
        </Button>&nbsp;
        <Button shape="square" type="cta" size="medium">
          <Icon name={faSearch} />
        </Button>&nbsp;
        <Button shape="square" type="cta" size="large">
          <Icon name={faSearch} />
        </Button>
      </div>
    </div>
  ));

