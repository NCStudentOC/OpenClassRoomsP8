


export default function Banner({ BannerImage, BannerTitle }) {
	return (
		<div className="banner">
			<img className="banner_image" src={BannerImage} alt='paysage' />
			<h1 className="banner_title">{BannerTitle}</h1>
		</div>
	)
}
