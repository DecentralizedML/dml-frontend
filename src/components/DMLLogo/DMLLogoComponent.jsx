import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const typeToClassNameHash = {
  blue: 'dml-logo--blue',
  white: 'dml-logo--white'
};

const typeToImageHash = {
  blue: '/iconLogo.svg',
  white: '/logos/Logo-Icon-Blue.svg'
}

export default function DMLLogo (props) {
  const { className, type } = props

  return (
    <div className={classnames('dml-logo', typeToClassNameHash[type], className)}>
      <img
        src={typeToImageHash[type]}
        width="12"
        height="12"
      />
      <div className="dml-logo__label">
        DML
      </div>
    </div>
  )
};

DMLLogo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};

DMLLogo.defaultProps = {
  type: 'blue'
};
