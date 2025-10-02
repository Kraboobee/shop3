export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Shop Krafti",
	// Your website's title and description (meta fields)
	title: "Shop Krafti - Handmade cards for every occasion",
	description:
		"Make your gifts feel truly special with beautiful handmade cards",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Kirstin Kleyn",
		email: "kmkleyn@gmail.com",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
