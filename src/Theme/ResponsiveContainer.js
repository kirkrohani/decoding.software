import PropTypes from 'prop-types';
import DesktopContainer from './DesktopContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    {/* @TODO Uncomment after implementing <MobileContainer>{children}</MobileContainer> */}
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;