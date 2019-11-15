import React from 'react';
import PropTypes from 'prop-types';
import DesktopHeader from './DesktopHeader';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopHeader>{children}</DesktopHeader>
    {/* @TODO Uncomment after implementing <MobileHeader>{children}</MobileHeader> */}
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;