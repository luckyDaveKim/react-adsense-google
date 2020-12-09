import React from 'react';
import PropTypes from 'prop-types';

class GoogleAdsense extends React.Component {
	componentDidMount() {
		if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
	};

	render() {
		return (
			<ins className={`adsbygoogle ${this.props.className}`}
			     style={this.props.style}
			     data-ad-client={this.props.adClient}
			     data-ad-slot={this.props.adSlot}
			     data-ad-layout={this.props.adLayout}
			     data-ad-layout-key={this.props.adLayoutKey}
			     data-ad-format={this.props.adFormat}
			     data-full-width-responsive={this.props.fullWidthResponsive}/>
		);
	}
}

GoogleAdsense.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	adClient: PropTypes.string.isRequired,
	adSlot: PropTypes.string.isRequired,
	adLayout: PropTypes.string,
	adLayoutKey: PropTypes.string,
	adFormat: PropTypes.string,
	fullWidthResponsive: PropTypes.string
};

GoogleAdsense.defaultProps = {
	className: '',
	style: {display: 'block'},
	adLayout: '',
	adLayoutKey: '',
	adFormat: 'auto',
	fullWidthResponsive: 'false'
};

export default GoogleAdsense
