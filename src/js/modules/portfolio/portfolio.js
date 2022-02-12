import { PortfolioItem } from './portfolioItem.js';

function portfolio(containerSelector) {
	const container = document.querySelector(containerSelector);

	new PortfolioItem({
		container: container,
		title: 'bringitup',
		repo: 'https://andrewsunshiny.github.io/loanprojct',
		promoImg: '/assets/img/works/bringitup.jpg',
		previewImg: '/assets/img/works/bringitup-preview.jpg',
		columns: 2,
	}).mount();

	new PortfolioItem({
		container: container,
		repo: 'https://andrewsunshiny.github.io/newprovidence',
		promoImg: '/assets/img/works/newprovidence.jpg',
		previewImg: '/assets/img/works/newprovidence-preview.jpg',
		title: 'newprovidence',
		columns: 2,
	}).mount();

	new PortfolioItem({
		container: container,
		repo: 'https://andrewsunshiny.github.io/roxy',
		promoImg: '/assets/img/works/roxy.jpg',
		previewImg: '/assets/img/works/roxy-preview.jpg',
		title: 'roxyy',
		columns: 2,
	}).mount();

	new PortfolioItem({
		container: container,
		repo: 'https://andrewsunshiny.github.io/global',
		promoImg: '/assets/img/works/global.jpg',
		previewImg: '/assets/img/works/global-preview.jpg',
		title: 'roxyy',
		columns: 2,
	}).mount();
}

export default portfolio;
