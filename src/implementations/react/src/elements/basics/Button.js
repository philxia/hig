
import * as HIG from 'hig.web';

import HIGElement from '../HIGElement';
import * as PropTypes from 'prop-types';
import createComponent from '../../adapters/createComponent';

class Button extends HIGElement {
  constructor(initialProps) {
    super(HIG.Button, initialProps);
  }

  componentDidMount() {
    this.commitUpdate(this.props);
  }

  commitUpdate(updatePayload, oldProps, newProps) {
    this.processUpdateProps(updatePayload)
      .mapToHIGFunctions({
        title: 'setTitle',
        link: 'setLink',
        icon: 'setIcon',
        type: 'setType',
        size: 'setSize'
      })
      .mapToHIGEventListeners(['onClick', 'onHover', 'onFocus', 'onBlur'])
      .handle('disabled', value => {
        value ? this.hig.disable() : this.hig.enable();
      });
  }
}

const ButtonComponent = createComponent(Button);

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onHover: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string
};

ButtonComponent.__docgenInfo = {
  props: {
    title: {
      description: 'sets the title of a button'
    },

    link: {
      description: 'sets the link of a button'
    },

    size: {
      description: 'specifies size of button'
    },

    type: {
      description: 'specifies type of button'
    },

    icon: {
      description: 'specifies icon for button'
    },

    onClick: {
      description: 'triggers when you click the button'
    },

    onHover: {
      description: 'triggers when you hover over the button'
    },

    onFocus: {
      description: 'triggers focus is moved to button'
    },

    onBlur: {
      description: 'triggers blur when focuss is moved away from icon'
    }
  }
};

export default ButtonComponent;
